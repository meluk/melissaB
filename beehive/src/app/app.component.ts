import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { Bee } from './models/bee';
import { Post } from './models/post';
import { Company } from './models/company';
import { Address } from './models/address';
import { Geo } from './models/geo';
import { Album } from './models/album';
import { Photo } from './models/photo';
import { Todo } from './models/todo';
import { Comment } from './models/comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private bees: Bee[] = [];
  private todo: Todo[] = [];
  private post: Post[] = [];
  @Input() infoBee = [];
  id;
 

  constructor(private http: Http) {
    this.loadFromJson();
  }

  loadData(usersUrl: string, postsUrl: string, albumsUrl: string, photosUrl: string, todosUrl: string, commentsUrl: string) {
    this.http.get(usersUrl).map(res => res.json()).subscribe((data) => {

      for (var user of data) {
        let company = new Company(user.company.name, user.company.catchPhrase, user.company.bs);
        let address = new Address(user.address.street, user.address.suite, user.address.city, user.address.zipcode, new Geo
          (user.address.geo.lat, user.address.geo.lng));
        let bee = new Bee(user.id, user.name, user.username, user.email, user.phone, user.website, address
          , company, user.avatarUrl);
        this.bees.push(bee);
      }

      this.http.get(postsUrl).map(res => res.json()).subscribe((data) => {
        for (var item of data) {
          let post = new Post(item.id, item.userId, item.title, item.body);
          for (var bee of this.bees) {
            if (post.getUserid() === bee.getId()) {
              bee.addPost(post);
            }
          }
        }
      });

      this.http.get(albumsUrl).map(res => res.json()).subscribe((data) => {
        for (var item of data) {
          let album = new Album(item.id, item.userId, item.title);
          for (var bee of this.bees) {
            if (album.getUserid() === bee.getId()) {
              bee.setAlbum(album);
            }
          }
        }

        this.http.get(photosUrl).map(res => res.json()).subscribe((data) => {
          for (var item of data) {
            let photo = new Photo(item.id, item.albumId, item.title, item.url, item.thumbnailUrl);
            for (var bee of this.bees) {
              if (photo.getAlbumId() === bee.getAlbum().getId()) {
                bee.addPhotoToAlbum(photo);
              }
            }
          }
        });

        this.http.get(todosUrl).map(res => res.json()).subscribe((data) => {
          for (var item of data) {
            let todo = new Todo(item.id, item.userId, item.title, item.completed);
            for (var bee of this.bees) {
              if (todo.getUserid() === bee.getId()) {
                bee.addTodo(todo);
              }
            }
          }
        });

        this.http.get(commentsUrl).map(res => res.json()).subscribe((data) => {
          for (var item of data) {
            let comment = new Comment(item.id, item.postId, item.name, item.body, item.email);
            for (var bee of this.bees) {
              for (var post of bee.getPosts()) {
                if (post.getId() === comment.getPostId()) {
                  post.addComment(comment);
                }
              }
            }
          }
        });
      });

      //1. Agregar tu información a este usuario.
      let company = new Company('Plan Up', 'A better world for everyone', 'Dream does not cost a dine');
      let address = new Address('Rea Ave', 'Coronado', 'San José', '1000', new Geo
        ('0.000001', '0.000002')); 
      let me = new Bee(11, 'Melissa Salazar', 'meluk', 'ksalazaru@ucenfotec.ac.cr', '70723991', 'https://github.com/meluk', address
        , company, 'https://animagehub.com/wp-content/uploads/2016/09/cupcake-vector-7-752x1024.png');
      let album = new Album(1000, 11, 'melissa Photos');
      let post = new Post(1, 11, 'PrimerPost' , 'body POST meli');
      me.setAlbum(album);
      me.addPost(post); // agrego los posts
      this.bees.push(me);
      console.log(me);
    });

  }

  loadFromServer() {
    //Data from: https://jsonplaceholder.typicode.com/
    this.loadData('https://jsonplaceholder.typicode.com/users',
      'https://jsonplaceholder.typicode.com/posts',
      'https://jsonplaceholder.typicode.com/albums',
      'https://jsonplaceholder.typicode.com/photos',
      'https://jsonplaceholder.typicode.com/todos',
      'https://jsonplaceholder.typicode.com/comments');
  }

  loadFromJson() {
    this.loadData('../assets/data/users.json',
      '../assets/data/posts.json',
      '../assets/data/albums.json',
      '../assets/data/photos.json',
      '../assets/data/todos.json',
      '../assets/data/comments.json');
  }

    getInfo(event):void{
    console.log(event);
      this.infoBee= event;
      this.id = this.infoBee[0];
     
    }

    addPost(event):void{
    console.log(event);
     console.log(this.infoBee[1].length);
     let posts = this.infoBee[1];
    let itemId = (this.infoBee[1].length + 1);
    let post = new Post(itemId, this.id, event.title , event.body);
    posts.push(post);
     // this.infoBee= event;
    }



  addTodo(event):void{
    console.log(this.infoBee[3]);
    let itemId = (this.infoBee[3].length + 1);
    let completed = false;
    let todo = new Todo(itemId, this.id, event, 'false');
    console.log('app'+ event);
    this.infoBee[3].push(todo);
  }

  addComment(event):void{
    let post = this.infoBee[1]
    let itemId = (post.comments + 1);
    let comment = new Comment(itemId, this.id, event.title, event.body, 'email');
    //this.infoBee[1]
    console.log(event);
     console.log(post.comments);

  }

    
}
