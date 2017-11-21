export class SpeechModel {
  id?: number;
  title: string;
  content: string;
  created: string;
  email: string;
  tags: string[];
  author: string;
  users: string[];

  constructor() {
    this.title = '';
    this.content = '';
    this.created = '';
    this.email = '';
    this.tags = [];
    this.author = '';
    this.users = [];
  }
}
