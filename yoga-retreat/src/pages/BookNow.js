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
        console.log("contact type changed to " + e.target.value);
        setSelectedContactType(e.target.value);
    };
    const handleAccommodationChange = (e) => {
        console.log("accommodation changed to " + e.target.value);
        setSelectedAccommodation(e.target.value);
    };
    const handleNumNightsChange = (e) => {
        setNumNightsInput(e.target.value);
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
        // TODO: Bonus mission A - Clear form once submission has successfully gone through.
        // TODO: Bonus mission B - Throw up alert and do not clear form if any required fields are invalid.
        // TODO: Bonus mission C - Add a modal instead of an alert that lists a summary of all their information and selections.
    };

    // TODO: perhaps use local storage for form to demonstrate what happens if you accidentally navigate away from app

    return (
        <div>
            {/* <video className="bg-video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"><source src="assets/mp4/yoga-montage-2.mp4" type="video/mp4" /></video> */}
            <div className="section-bkg">
                <form>

                    <div id="personalInfo" className="mb-4">
                        <h2>Part 1: Personal Information</h2>
                        <div className="row">
                            <div className="col">
                                <TextInput id="firstName" label="First Name" required={true} handleChange={handleFirstNameChange} />
                            </div>
                            <div className="col">
                                <TextInput id="lastName" label="Last Name" required={true} handleChange={handleLastNameChange} />
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
                                <TextInput id="email" label="Email" required={true} handleChange={handleEmailChange} />
                            </div>
                            <div className="col">
                                <TextInput id="phone" label="Phone number" required={true} handleChange={handlePhoneChange} />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-3">
                                <SelectInput id="preferredContact" label="Preferred Contact Type" options={preferredContactOptions} handleChange={handleContactTypeChange} required={true} />
                            </div>
                            <div className="col-9">
                                {/* TODO: Show only if "phone" is selected */}
                                {selectedContactType === "phone" && <CheckboxGroup id="contactAvailability" options={contactAvailability} prepend="When can we call?" />}
                            </div>
                        </div>
                    </div>

                    <div id="accommodations" className="mb-4">
                        <h2>Part 2: Accommodations</h2>
                        <div className="row">
                            <div className="col-8">
                                <RadioButtons id="accommodationType" options={accommodationTypes} prepend="How long would you like to stay?" handleChange={handleAccommodationChange} required={true} />
                            </div>
                            <div className="col-4">
                                {/* TODO: Show only if "overnight" is selected */}
                                {selectedAccommodation === "overnight" && <NumberInput id="phone" label="Nights" width="100px" placeholder="1" required={selectedAccommodation === "overnight"} handleChange={handleNumNightsChange} />}
                            </div>
                        </div>
                    </div>

                    <div id="services" className="mb-4">
                        <h2>Part 3: Services</h2>
                        <h4>Yoga & Meditation</h4>
                        <div className="row">
                            <div className="col-8">
                                <CheckboxGroup id="yogaTypes" options={yogaTypes} handleChange={handleYogaSelectionsChange} />
                            </div>
                            <div className="col-4">
                            {/* TODO: Make this required only if one of the yoga options has been checked */}
                                <SelectInput id="yogaLevel" label="Yoga Level" options={yogaLevels} handleChange={() => {}} />
                            </div>
                        </div>
                        <h4>Spa</h4>
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