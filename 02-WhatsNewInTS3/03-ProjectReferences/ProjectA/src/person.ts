import { guid } from "../../Shared/utils";

class Person {
  id: string;
  name: string;
  constructor() {
    this.id = guid();
  }
}
