import React, { useState } from "react";
import RadioButtons from "../components/forms/RadioButtons";
import SelectInput from "../components/forms/SelectInput";
import TextInput from "../components/forms/TextInput";
import Note from "../components/forms/Note";
import CheckboxGroup from "../components/forms/CheckboxGroup";
import NumberInput from "../components/forms/NumberInput";

const BookNow = () => {

    // const [currPart, setCurrPart] = useState("personalInfo");

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
                                <TextInput id="firstName" label="First Name" />
                            </div>
                            <div className="col">
                                <TextInput id="lastName" label="Last Name" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-6">
                                <RadioButtons id="ageRange" options={ageRangeOptions} prepend="Age:" />
                            </div>
                            <div className="col-6 mt-3">
                                <Note text="Guests must be age 12 or older." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <TextInput id="email" label="Email" />
                            </div>
                            <div className="col">
                                <TextInput id="phone" label="Phone number" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-3">
                                <SelectInput id="preferredContact" label="Preferred Contact Type" options={preferredContactOptions} />
                            </div>
                            <div className="col-9">
                                {/* TODO: Show only if "phone" is selected */}
                                <CheckboxGroup id="contactAvailability" options={contactAvailability} prepend="When can we call?" />
                            </div>
                        </div>
                    </div>

                    <div id="accommodations" className="mb-4">
                        <h2>Part 2: Accommodations</h2>
                        <div className="row">
                            <div className="col-8">
                                <RadioButtons id="accommodationType" options={accommodationTypes} prepend="How long would you like to stay?" />
                            </div>
                            <div className="col-4">
                                {/* TODO: Show only if "overnight" is selected */}
                                {<NumberInput id="phone" label="Nights" width="100px" placeholder="1" />}
                            </div>
                        </div>
                    </div>

                    <div id="services" className="mb-4">
                        <h2>Part 3: Services</h2>
                        <h4>Yoga & Meditation</h4>
                        <div className="row">
                            <div className="col-8">
                                <CheckboxGroup id="yogaTypes" options={yogaTypes} />
                            </div>
                            <div className="col-4">
                                <SelectInput id="yogaLevel" label="Yoga Level" options={yogaLevels} />
                            </div>
                        </div>
                        <h4>Spa</h4>
                        <div className="row">
                            <div className="col">
                                <CheckboxGroup id="massageTypes" options={massageTypes} prepend="Massage:" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <CheckboxGroup id="otherTherapies" options={otherTherapies} prepend="Other Therapies:" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <CheckboxGroup id="skinCare" options={skinCare} prepend="Skin Care:" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookNow;