import { Component, OnInit } from "@angular/core";
import { ParserService } from "src/app/parser.service";

@Component({
  selector: "app-parser",
  templateUrl: "./parser.component.html",
  styleUrls: ["./parser.component.css"]
})
export class ParserComponent implements OnInit {
  parseResult: string;

  constructor(private parserService: ParserService) {}

  ngOnInit() {}

  parseInput(myInputValue) {
    if (myInputValue !== "") {
      this.parserService.parse(myInputValue).subscribe(resArray => {
        this.parseResult = JSON.stringify(resArray, undefined, 4);
      });
    } else {
      this.parseResult = "";
      alert("input is required");
    }
  }
}
