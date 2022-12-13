import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, DocumentData, CollectionReference, onSnapshot, QuerySnapshot } from 'firebase/firestore'
import { from, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { resolve } from 'dns';
import { rejects } from 'assert';
// import { PostUser } from '../models/user-post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  Notion: Firestore;
  postCol: CollectionReference<DocumentData>;
  private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>();
  obsr_UpdatedSnapshot = this.updatedSnapshot.asObservable();
  currentUserPost$: any;

  constructor() {
    initializeApp(environment.firebase);
    this.Notion = getFirestore();
    this.postCol = collection(this.Notion, 'posts');

    onSnapshot(this.postCol, (snapshot) => {
      this.updatedSnapshot.next(snapshot);
    }, (err) => {
      console.log(err);
    })
  }

  async getpost() {
    const snapshot = await getDocs(this.postCol);
    return snapshot;
  }


  async addPost(title: string, stitle: string, displayName: string, content: string) {
    await addDoc(this.postCol, {
      title,
      stitle,
      displayName,
      content
    })
    return;
  }

  async deletePost(docId: string) {
    const docRef = doc(this.Notion, 'posts', docId)
    await deleteDoc(docRef);
    return;
  }

  async updatePost(docId:string,title: string, stitle: string, displayName: string, content: string) {
    const docRef = doc(this.Notion, 'posts', docId);
    await updateDoc(docRef, { title, stitle,displayName,content })
    return;
  }


//   constructor(private angularFirestore: AngularFirestore){}

//   getPostDoc(id:any){
//     return this.angularFirestore.collection("posts").doc(id).valueChanges();
//   }

//   getPostList(){
//     return this.angularFirestore.collection("posts").snapshotChanges();
//   }

//   createPost(post: PostUser){
//     return new Promise<any>((resolve, reject) => {
//       this.angularFirestore.collection("posts").add(post).then(response => {
//         console.log(response)
//       },
//       error => reject(error));
//     });
//   }

//   deletePost(post: PostUser){
//     return this.angularFirestore.collection("posts").doc(post.id).delete();
//   }

//   updatePost(post: PostUser, id:any){
//     return this.angularFirestore.collection("posts").doc(id).update({
//     title: post.title,
//     stitle: post.stitle,
//     genre: post.genre,
//     content: post.content,
//     });
//   }

  

}