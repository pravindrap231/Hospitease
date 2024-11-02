# Hospitease - Hospital Management System

Hospitease is an advanced hospital management solution designed to simplify hospital operations, enhance patient care, and streamline administrative tasks. The system provides role-specific functionalities for admins, receptionists, doctors, and patients, making it a comprehensive tool for modern hospital management.

## Table of Contents

- [About Hospitease](#about-hospitease)
- [Core Functionalities](#core-functionalities)
- [Key Features by Role](#key-features-by-role)
- [Technologies Used](#technologies-used)
- [Future Development](#future-development)
- [Conclusion](#conclusion)

## About Hospitease

Hospitease was developed to address common challenges in hospital resource management, such as tracking bed availability, managing appointments, and handling patient data. Inspired by real-world requirements for transparency and efficiency in healthcare, Hospitease offers a unified system accessible to both staff and patients.

## Core Functionalities

Hospitease provides role-specific access to ensure efficient and secure hospital management:
- **Admin**: Oversees hospital resources, such as beds, doctors, and stocks.
- **Receptionist**: Manages appointments, patient records, and stock information.
- **Doctor**: Accesses patient information, lab reports, and appointment schedules.
- **User**: Books appointments, views bed availability, and browses doctor information.

## Key Features by Role

### Admin

Each hospital has one designated admin, responsible for managing key aspects of hospital resources.

- **Admin Dashboard**: Displays summary data, including total patients, appointments, and prescriptions, along with a table of recent appointments.
- **Beds**: Tracks the availability of various bed types within the hospital.
- **Doctors**: Manages records of doctors working within the hospital.
- **Stocks**: Manages inventory records for essential hospital supplies.

Admins have the ability to add, delete, and update data related to beds, doctors, and stocks, ensuring that hospital records are accurate and up-to-date.

### Receptionist

The receptionist manages appointments, patient data, and stock records.

- **Appointment List**: A table of appointments with the functionality to add new appointments.
- **Receptionist Dashboard**: Shows recent patient records, lab reports, surgeries, and urgent cases for the past 7 days, along with tables of the last 10 patients and lab reports.
- **Patient Records**: Maintains comprehensive data on all patients who have visited the hospital, with options to add new patients.
- **Stocks**: Displays inventory data with editing options.

### Doctor

Doctors can access patient information, manage their appointments, and review lab reports.

- **Doctor Dashboard**: Displays records of patients, lab reports, surgeries, and urgent cases for the past 7 days, along with tables for the last 10 patients and lab reports.
- **Appointment List**: A table of appointments managed by the doctor.
- **Patient Records**: Contains all patient data specific to each doctor.

### User

Users can interact with the hospital system to view and book resources.

- **Landing Page**: A general introduction to Hospitease.
- **Check Bed Availability**: Allows users to view which hospitals have available beds.
- **Appointment Booking**: Enables users to schedule appointments with specific doctors at selected hospitals.
- **Doctors List**: Displays doctors available at a hospital.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Spring Boot (current), with plans to integrate React for frontend in future development
- **Database**: MySQL (for structured data management)

## Future Development

Future improvements include the integration of React with Spring Boot to enhance the user experience and provide a more dynamic, responsive interface.

## Conclusion

Hospitease represents a significant advancement in hospital management, with real-time resource tracking, role-based access, and user-friendly appointment scheduling. By consolidating data into a centralized platform, Hospitease promotes operational efficiency, better patient care, and improved resource transparency across hospitals.

For more details or to contribute, explore this repository and join us in evolving Hospitease to meet the changing needs of healthcare.
