import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../security/auth.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  addComponent:boolean = false;
  discussion: any = [];
  showTags:any = [];


  constructor(public rest : RestService, private route : ActivatedRoute, private router : Router, private auth:AuthService) {
    console.log('Review component - constructor activated');
  }

  ngOnInit() {

    console.log('Role of current user: ', this.auth.currentUserValue.roles);
    console.log('Review Init - Call to rest - Id param: ', this.route.snapshot.params['id']);
    this.rest.getDiscussion(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log('Review component - data loading');
      this.discussion = data;
      console.log(data);
      this.showTags = this.discussion.tags;
    });

  }

  delete(id:number){
    this.rest.deleteDiscussion(id).subscribe(res => {
        console.log('Deleted Discussion without errors: ', res);
        this.router.navigate(['main']);
      }, (err) => {
        console.log('Error Deleting Discussion: ', err);
        this.router.navigate(['main']);
      });
  }

  deleteComment(id:number){
    this.rest.deleteComment(id).subscribe(res => {
      console.log('Deleted Comment without errors: ', res);
      this.router.navigate(['main']);
    }, (err) => {
      console.log('Error Deleting Comment: ', err);
      this.router.navigate(['main']);
    });
  }

  loadAddComponent(){
    this.addComponent=true;
  }

}
