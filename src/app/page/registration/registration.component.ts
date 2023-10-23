import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {
  fullname: string = '';
  studentfrom: any = {
    firstName: "",
    middleName: "",
    lastName: "",
    contactno: "",
    email: "",
    dob: "",
    age: "",
    licence: "",
    eduction: "",
    highestedu: "",
    highpermark: "",
    highpassingyear: "",
    hsc: "",
    hscpassing: "",
    degfyear: "",
    degsyear: "",
    degtyear: "",
    degpassing: "",
    startyear: "",
    endyear: ""

  }
  createfullname() {
    this.fullname = this.studentfrom.firstName + " " + this.studentfrom.middleName + " " + this.studentfrom.lastName

  }

  dobDate() {
    const selectyear = new Date(this.studentfrom.dob);
    const dob = selectyear.getFullYear();
    const curerentyear = new Date().getFullYear();
    this.studentfrom.age = curerentyear - dob
  }

  eductionYear() {
    const startYear = new Date(this.studentfrom.startyear).getFullYear();
    const endYear = new Date(this.studentfrom.endyear).getFullYear();
    const differ = endYear - startYear;
    if (differ != 3) {
      alert("You are not eligible for this course")
    }

  }
  onReset() {
    this.studentfrom = {
      firstName: "",
      middleName: "",
      lastName: "",
      contactno: "",
      email: "",
      dob: "",
      age: "",
      licence: "",
      eduction: "",
      highestedu: "",
      highpermark: "",
      highpassingyear: "",
      hsc: "",
      hscpassing: "",
      degfyear: "",
      degsyear: "",
      degtyear: "",
      degpassing: "",
      startyear: "",
      endyear: ""

    }

  }
  onSave(){
    alert("Submit Successfully")
  }

}

