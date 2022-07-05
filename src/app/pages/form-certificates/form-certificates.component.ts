import { EventService } from './../../services/event.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CvsEvent } from './../../modules/cvsEvent';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-certificates',
  templateUrl: './form-certificates.component.html',
  styleUrls: ['./form-certificates.component.css']
})
export class FormCertificatesComponent implements OnInit {
  dataCvs: any;

  form: FormGroup = new FormGroup({
    //name: new FormControl("", [Validators.required]),
  });

  @ViewChild('csvReader') csvReader: any;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  uploadListener($event: any): void {
    let files = $event.srcElement.files;
    if (this.isValidCSVFile(files[0])) {

      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        this.dataCvs = csvRecordsArray;
      };
      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };
    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = "";
  }

  async onSubmit() {
    for (let index = 0; index < this.dataCvs.length; index++) {
      const element = {
        name: this.dataCvs[index]
      };
      if (element.name != null && element.name.length > 0) {

        await this.eventService.addEvents(element).then(resp => {
          console.log("Fue un exito");
          console.log(resp);
        }).catch(error => {
          console.log(error);
        })
      }
    }
  }
}

