import { Component, OnInit } from '@angular/core';
import { DocumentData, QuerySnapshot } from '@firebase/firestore';
import { switchMap, tap } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { HotToastService } from '@ngneat/hot-toast';
import { untilDestroyed } from '@ngneat/until-destroy';
import { title } from 'process';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  post1$ = this.PostService.currentUserPost$;

  postDetails = {
    pid: '',
    title: '',
    stitle: '',
    displayName: '',
    content: ''
  }
  postCollectiondata: { docId: string, title: string, stitle: string,displayName: string,content: string }[] | any = [];
  dataSourcePost: any;
  getP: any;
  profileForm: any;

  constructor(private PostService: PostService, private _formBuilder: FormBuilder
    ) { }
    firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  ngOnInit(): void {
    this.get();
    this.PostService.obsr_UpdatedSnapshot.subscribe((snapshot) => {
      this.updatePostCollection(snapshot);
    });

    this.PostService.currentUserPost$
    .pipe(
      untilDestroyed(this), tap(console.log))
    .subscribe((post1: any) =>   {
      this.profileForm.patchValue({ ...post1 });
    });

  }

  async add() {
    const { title, stitle, displayName, content } = this.postDetails;
    await this.PostService.addPost(title, stitle,displayName,content);
    this.postDetails.title = "";
    this.postDetails.stitle = "";
    this.postDetails.displayName = "";
    this.postDetails.content = "";
  }

  async get() {
    const snapshot = await this.PostService.getpost();
    this.updatePostCollection(snapshot);

  }

  updatePostCollection(snapshot: QuerySnapshot<DocumentData>) {
    this.postCollectiondata = [];
    snapshot.docs.forEach((post) => {
      this.postCollectiondata.push({ ...post.data(), id: post.id });
    })
  }


  async delete(docId: string) {
    await this.PostService.deletePost(docId);
  }

  async update(docId: string, title: HTMLInputElement, stitle: HTMLInputElement, displayName: HTMLInputElement, content: HTMLInputElement) {
    await this.PostService.updatePost(docId, title.value, stitle.value,displayName.value,content.value);
  }


}