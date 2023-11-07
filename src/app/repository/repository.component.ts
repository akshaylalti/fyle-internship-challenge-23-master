import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Repos } from '../models/publicRepos';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent {
  myObject: any = {};
  // publicRepo: publicRepos[]=[];
  publicRepos:any;
  p:any;
  language: any;
  repositoryLanguages: any[] = [];
  githubUsername: string = this.api.Username;
  publicRepo: Repos[] = [];
  limitRecord: number = 10;
  skipRecord: number = 0;
  tempPublicRepos: any;
  repos: Repos = new Repos();
  // ngOnInit() {
  //   this.getAllLanguages('githubUserName', 'repoName');
  // }

  constructor(private api: ApiService) {
    this.api.getRepo().subscribe(
      (user) => {
        // this.publicRepo[0] = user;
        this.publicRepos = user
        this.myObject = user;

    //     for (let i = 0; i < this.myObject.length; i++) {
    //       const repoName = this.myObject[i].name;
    //       this.publicRepos.push(repoName);
    //         this.api.getReposLangues(this.githubUsername, this.publicRepos).subscribe(response => {
    //           this.repos = new Repos();
    //           this.repos.languages = Object.keys(response);
    //           this.repos.name = repoName;
    //           this.publicRepo.push(this.repos);
    //         });
    //         console.log(this.myObject[i])
    //     }

      },
      (error) => {
        console.log("User not found");
      }
    );
  }

//   getAllRepos() {
//     this.api.getRepo(this.githubUsername).subscribe(response => {
//       // this.publicRepos.push(response.name);
//       var dh = Object.values(response);
//       dh.forEach(element => {
//         this.getAllLanguages(this.githubUsername, element.name);
//       });
//     });
//   }
//   getAllLanguages(githubUserName: string, repoName: string) {
//     this.api.getReposLangues(githubUserName, repoName).subscribe(response => {
//       this.repos = new Repos();
//       this.repos.name = repoName;
//       this.repos.languages = Object.keys(response);
//       this.publicRepos.push(this.repos);
// });
}


