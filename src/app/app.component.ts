import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts: Array<Object> = [
    {
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quam necessitatibus itaque, provident illum quaerat mollitia porro, similique consectetur obcaecati laborum cumque! Laudantium aspernatur, cum aut dolorem hic minima dolor!",
      loveIts: 0,
      created_at: new Date()

    },

    {
      title: "Mon deuxième message",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quam necessitatibus itaque, provident illum quaerat mollitia porro, similique consectetur obcaecati laborum cumque!Laudantium aspernatur, cum aut dolorem hic minima dolor!",
      loveIts: 0,
      created_at: new Date()

    },

    {
      title: "Enfin, un troisième article",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quam necessitatibus itaque, provident illum quaerat mollitia porro, similique consectetur obcaecati laborum cumque!Laudantium aspernatur, cum aut dolorem hic minima dolor!",
      loveIts: 0,
      created_at: new Date()


    },


  ]


  title = 'blog';
}
