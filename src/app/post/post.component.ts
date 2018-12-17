import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

 @Input() post;

  constructor() { }

  ngOnInit() {
  }

  onLike() {
    //incrementer le post.like
    this.post.loveIts++;
    console.log(this.post);
  }

  onDislike() {
    //décrémenter le post.like
    this.post.loveIts--;
    console.log(this.post);
  }

}

