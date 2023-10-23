import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  fullname: string = '';
  studentfromArrya: any[]=[];
  studentfrom: any = {
    id:1 ,
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
  ngOnInit(): void {
    
    const localData =localStorage.getItem('student');
    if(localData !== null){
      this.studentfromArrya=JSON.parse(localData)
    }
    
    
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
      startyear: "",
      endyear: ""

    }

  }
  onSave() {

    const localData =localStorage.getItem('student');
    if(localData == null){
      this.studentfromArrya.push(this.studentfrom);
      localStorage.setItem("student",JSON.stringify(this.studentfromArrya))
    }else{
      const pasData =JSON.parse(localData);
      this.studentfrom.id=pasData.length+1
      this.studentfromArrya.push(this.studentfrom);
      localStorage.setItem("student",JSON.stringify(this.studentfromArrya))
    }
    alert("Submit Successfully")
  }

}

