// Base Storage class
class Storage {
    name;
    gender;
    contact;
    bloodGroup;
    #age;
    #medHistory = [];
    #reports = [];
    #medicine = [];
    #doctors = [];
    #nextAppointment = null;

    constructor(name, age, gender, contact) {
        this.name = name;
        this.#age = age;
        this.gender = gender;
        this.contact = contact;
    }

    // Public methods
    displayBasicInfo() {
        console.log(`Name: ${this.name}, Age: ${this.#age}, Gender: ${this.gender}, Contact: ${this.contact}, Blood Group: ${this.bloodGroup}`);
    }

    setBloodGroup(bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    addMedicalHistory(record) {
        this.#medHistory.push(record);
    }

    addReport(report) {
        this.#reports.push(report);
    }

    addMedicine(medicine) {
        this.#medicine.push(medicine);
    }

    assignDoctor(doctorName) {
        this.#doctors.push(doctorName);
    }

    setNextAppointment(date) {
        this.#nextAppointment = date;
    }

    // Getters for private properties
    getMedicalHistory() {
        return this.#medHistory;
    }

    getReports() {
        return this.#reports;
    }

    getMedicines() {
        return this.#medicine;
    }

    getDoctors() {
        return this.#doctors;
    }

    getNextAppointment() {
        return this.#nextAppointment;
    }
}

// Patient class extending Storage
class Patient extends Storage {
    #password;
    userName;

    constructor(name, age, gender, contact, userName, password) {
        super(name, age, gender, contact);
        this.userName = userName;
        this.#password = password;
    }

    editInfo(newName, newGender, newContact) {
        this.name = newName;
        this.gender = newGender;
        this.contact = newContact;
        console.log(`Info updated for patient ${this.userName}`);
    }

    readInfo() {
        this.displayBasicInfo();
    }

    // Optional: Password protection
    changePassword(newPassword) {
        this.#password = newPassword;
    }

    verifyPassword(inputPassword) {
        return this.#password === inputPassword;
    }
}

// Doctor class extending Storage
class Doctor extends Storage {
    userName;
    #password;
    degree;
    patients = []; // List of assigned patients

    constructor(name, age, gender, contact, userName, password, degree) {
        super(name, age, gender, contact);
        this.userName = userName;
        this.#password = password;
        this.degree = degree;
    }

    assignPatient(patient) {
        this.patients.push(patient);
    }

    readPatientInfo(patient) {
        console.log(`Reading patient info for ${patient.name}:`);
        patient.readInfo();
    }

    readReports(patient) {
        console.log(`Reports for ${patient.name}:`, patient.getReports());
    }

    updateReports(patient, newReport) {
        patient.addReport(newReport);
        console.log(`Added new report for ${patient.name}: ${newReport}`);
    }

    verifyPassword(inputPassword) {
        return this.#password === inputPassword;
    }
}
