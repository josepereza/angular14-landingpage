import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-alta-post',
  templateUrl: './alta-post.component.html',
  styleUrls: ['./alta-post.component.css']
})
export class AltaPostComponent implements OnInit {

  constructor(private fb:FormBuilder, private postService:PostService) { }

  ngOnInit(): void {
  }

  miForm =this.fb.group({
    title:[''],
    content:[''],
    authorEmail:['']
  })
onSubmit(){
  console.log(this.miForm.value)
this.postService.CreaPost(this.miForm.value).subscribe(data=>{
  console.log(data)
})
}
}
