import React, { useState } from "react";
import CheckboxInput from "../components/forms/Checkbox";
import RadioButtons from "../components/forms/RadioButtons";
import SelectInput from "../components/forms/SelectInput";
import TextInput from "../components/forms/TextInput";
import Note from "../components/forms/Note";

const BookNow = () => {

    // const [currPart, setCurrPart] = useState("personalInfo");

    const preferredContactOptions = [
        {value: "email", option: "Email"},
        {value: "phone", option: "Phone"},
        {value: "text", option: "Text"},
    ];
    const ageRangeOptions = [
        {value: "youth", option: "12-17"},
        {value: "adult", option: "18-67"},
        {value: "senior", option: "68+"},
    ];

    /*
        TODO: Create booking form

        Make it a series of sections with tabs or back-forward
        
        PART 2 Accommodations:
        _ Overnight stay (___ days) OR _ Daytime visit
        Attending alone or with others? Give the name of the primary organizer of your group: ____________ 
        Approximate number of guests: __

        PART 3A Services: Yoga (expandable sub form)
            Traditional Yoga
                Level (beginner, intermediate, advanced)
            Gentle Yoga
                Special considerations (pregnancy, injury, post-surgery, arthritis, etc.)
            Meditation

        PART 3B Services: Day Spa (expandable sub form)
            Massage
                Relaxation, Therapeutic, Swedish, Hot Stone, Deep Tissue, Pre-natal, etc
            Float Pod
            Sauna/Steam Room
            Mani/Pedi
            Facials/Peels
            Waxing/Threading

        PART 4 Review
            (Display personal info & all selections)
            Submit

        Modal confirmation

    */

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
                            <div className="col-1 mt-3"><label className="lh-lg">Age:</label></div>
                            <div className="col-5">
                                <RadioButtons id="ageRange" options={ageRangeOptions} />
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
                            {/* <div className="col-4 mt-3"><label>Preferred Time of Day:</label></div> */}
                            <div className="col-5">
                                <SelectInput id="preferredContact" label="Preferred Method of Contact" options={preferredContactOptions} />
                            </div>
                            <div className="col-7">
                                <div className="row">
                                    <div className="col-4"><CheckboxInput id="morning" label="Morning" /></div>
                                    <div className="col-4"><CheckboxInput id="afternoon" label="Afternoon" /></div>
                                    <div className="col-4"><CheckboxInput id="evening" label="Evening" /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="accommodations" className="mb-4">
                        <h2>Part 2: Accommodations</h2>
                        <div className="row">
                            <div className="col">
                                <TextInput id="firstName" label="First Name" />
                            </div>
                            <div className="col">
                                <TextInput id="lastName" label="Last Name" />
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
                        {/* Preferred method of contact - select */}
                    </div>

                </form>
            </div>
        </div>
    );
};

export default BookNow;