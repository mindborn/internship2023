import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

  doctors: Doctor[] = [];

  new_doctor: Doctor = {
    doctorid: 0,
    name: '',
    address: '',
    phone: '',
    degree: '',
    speciality: '',
    active: 0
  };

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.getDoctors();
  }

  private getDoctors() {
    this.httpClient.get<Doctor[]>("http://localhost:8080/doctor")
      .subscribe((doctors) => {
        console.log(doctors);
        this.doctors = doctors;
      });

  }


  onAddDoctor() {
    this.httpClient.post('http://localhost:8080/doctor', this.new_doctor)
      .subscribe((res) => {
        console.log(res);
      });
    this.getDoctors();
    this.new_doctor = {
      doctorid: 0,
      name: '',
      address: '',
      phone: '',
      degree: '',
      speciality: '',
      active: 0
    };
  }

  onDelete(doctor: Doctor) {
    if (!confirm(`Do you want to delete doctor ${doctor.name}`)) return;
    this.httpClient.delete(`http://localhost:8080/doctor/${doctor.doctorid}`)
      .subscribe(console.log);
    let index = this.doctors.indexOf(doctor);
    this.doctors.splice(index, 1);
  }

  onUpdate(doctor: Doctor) {
    this.httpClient.put("http://localhost:8080/doctor", doctor)
      .subscribe(console.log);
  }

}
