import React, { useState } from "react";
import RadioButtons from "../components/forms/RadioButtons";
import SelectInput from "../components/forms/SelectInput";
import TextInput from "../components/forms/TextInput";
import Note from "../components/forms/Note";
import CheckboxGroup from "../components/forms/CheckboxGroup";
import NumberInput from "../components/forms/NumberInput";

const ageRangeOptions = [
    {value: "youth", option: "12-17"},
    {value: "adult", option: "18-67"},
    {value: "senior", option: "68+"},
];
const preferredContactOptions = [
    {value: "email", option: "Email"},
    {value: "phone", option: "Phone"},
    {value: "text", option: "Text"},
];
const contactAvailability = [
    {value: "morning", option: "8AM-12PM"},
    {value: "afternoon", option: "1PM-5PM"},
    {value: "evening", option: "5PM-8PM"},
];
const accommodationTypes = [
    {value: "dayVisit", option: "Day Visit"},
    {value: "overnight", option: "Overnight"},
];
const yogaTypes = [
    {value: "traditional", option: "Traditional Yoga"},
    {value: "gentle", option: "Gentle Yoga"},
    {value: "meditation", option: "Meditation"},
];
const yogaLevels = [
    {value: "beginner", option: "Beginner"},
    {value: "intermediate", option: "Intermediate"},
    {value: "advanced", option: "Advanced"},
];
const massageTypes = [
    {value: "relaxation", option: "Relaxation"},
    {value: "therapeutic", option: "Therapeutic"},
    {value: "deepTissue", option: "Deep Tissue"},
    {value: "hotStone", option: "Hot Stone"},
    {value: "swedish", option: "Swedish"},
];
const otherTherapies = [
    {value: "sauna", option: "Sauna"},
    {value: "steamRoom", option: "Steam Room"},
    {value: "floatPod", option: "Float Pod"},
];
const skinCare = [
    {value: "maniPedi", option: "Mani/Pedi"},
    {value: "waxThread", option: "Waxing/Threading"},
    {value: "facialsPeels", option: "Facials/Peels"},
];

const BookNow = () => {

    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [ageInput, setAgeInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");
    const [selectedContactType, setSelectedContactType] = useState("");
    const [availabilitySelections, setAvailabilitySelections] = useState([]);
    const [selectedAccommodation, setSelectedAccommodation] = useState("");
    const [numNightsInput, setNumNightsInput] = useState(0);
    const [yogaSelections, setYogaSelections] = useState([]);
    const [selectedyogaLevel, setSelectedYogaLevel] = useState("");
    const [massageSelections, setMassageSelections] = useState([]);
    const [otherTherapiesSelections, setOtherTherapiesSelections] = useState([]);
    const [skinCareSelections, setSkinCareSelections] = useState([]);

    const handleFirstNameChange = (e) => {
        setFirstNameInput(e.target.value);
    };
    const handleLastNameChange = (e) => {
        setLastNameInput(e.target.value);
    };
    const handleAgeChange = (e) => {
        setAgeInput(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
    };
    const handlePhoneChange = (e) => {
        setPhoneInput(e.target.value);
    };
    const handleContactTypeChange = (e) => {
        setSelectedContactType(e.target.value);
    };
    const handleAvailabilitySelectionsChange = (selections) => {
        setAvailabilitySelections(selections);
    };
    const handleAccommodationChange = (e) => {
        setSelectedAccommodation(e.target.value);
    };
    const handleNumNightsChange = (e) => {
        setNumNightsInput(Number(e.target.value));
    };
    const handleYogaSelectionsChange = (selections) => {
        setYogaSelections(selections);
    };
    const handleYogaLevelChange = (e) => {
        setSelectedYogaLevel(e.target.value);
    };
    const handleMassageSelectionsChange = (selections) => {
        setMassageSelections(selections);
    };
    const handleOtherTherapiesSelectionsChange = (selections) => {
        setOtherTherapiesSelections(selections);
    };
    const handleSkinCareSelectionsChange = (selections) => {
        setSkinCareSelections(selections);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your submission has been sent. You will hear back from our staff within 24 hours.");
        // TODO: Clear the entire form once submission has successfully gone through. Note: the fields don't clear at the parent level, but at the child level, though you also want to reset your state values here too. How can you communicate to the child component that it should reset, and how will it know when to do it?  

        // TODO: Throw up an alert and do not clear form if any required fields are invalid or missing.

        // TODO: Bonus Mission B - Add a modal instead of an alert that lists a summary of all their information and selections. (Hint: adapt the modal and backdrop components from my Studio 10 exercise!)
    };

    return (
        <div>
            <div className="form-content">
                <form>   
                    <div id="personalInfo" className="mb-4">
                        <h2 className="form-section">Part 1: Personal Information</h2>
                        <div className="row">
                            <div className="col">
                                <TextInput type="text" id="firstName" label="First Name" required={true} handleChange={handleFirstNameChange} />
                            </div>
                            <div className="col">
                                <TextInput type="text" id="lastName" label="Last Name" required={true} handleChange={handleLastNameChange} />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-6">
                                <RadioButtons id="ageRange" options={ageRangeOptions} prepend="Age:" handleChange={handleAgeChange} required={true} />
                            </div>
                            <div className="col-6 mt-3">
                                <Note text="Guests must be age 12 or older." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <TextInput type="email" id="email" label="Email" required={true} handleChange={handleEmailChange} />
                            </div>
                            <div className="col">
                                <TextInput type="tel" id="phone" label="Phone number (XXX-XXX-XXXX)" required={true} handleChange={handlePhoneChange} />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-3">
                                <SelectInput id="preferredContact" label="Preferred Contact Type" options={preferredContactOptions} handleChange={handleContactTypeChange} required={true} />
                            </div>
                            <div className="col-9">
                                {selectedContactType === "phone" && <CheckboxGroup id="contactAvailability" options={contactAvailability} prepend="When can we call?" handleChange={handleAvailabilitySelectionsChange} />}
                            </div>
                        </div>
                    </div>

                    <div id="accommodations" className="mb-4">
                        <h2 className="form-section mt-5">Part 2: Accommodations</h2>
                        <div className="row">
                            <div className="col-8">
                                <RadioButtons id="accommodationType" options={accommodationTypes} prepend="How long would you like to stay?" handleChange={handleAccommodationChange} required={true} />
                            </div>
                            <div className="col-4">
                                {selectedAccommodation === "overnight" && <NumberInput id="phone" label="Nights" width="100px" placeholder="1" required={selectedAccommodation === "overnight"} handleChange={handleNumNightsChange} />}
                            </div>
                        </div>
                    </div>

                    <div id="services" className="mb-4">
                        <h2 className="form-section mt-5">Part 3: Services</h2>
                        <h4 className="subsection mt-3">Yoga & Meditation</h4>
                        <div className="row">
                            <div className="col-8">
                                <CheckboxGroup id="yogaTypes" options={yogaTypes} handleChange={handleYogaSelectionsChange} />
                            </div>
                            <div className="col-4">
                                <SelectInput id="yogaLevel" label="Yoga Level" options={yogaLevels} required={yogaSelections.includes("traditional")} handleChange={handleYogaLevelChange} />
                            </div>
                        </div>
                        <h4 className="subsection mt-3">Spa</h4>
                        <div className="row">
                            <div className="col">
                                <CheckboxGroup id="massageTypes" options={massageTypes} handleChange={handleMassageSelectionsChange} prepend="Massage:" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <CheckboxGroup id="otherTherapies" options={otherTherapies} handleChange={handleOtherTherapiesSelectionsChange} prepend="Other Therapies:" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <CheckboxGroup id="skinCare" options={skinCare} handleChange={handleSkinCareSelectionsChange} prepend="Skin Care:" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default BookNow;