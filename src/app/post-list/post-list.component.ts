import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
