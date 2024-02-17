import React from "react";

interface LocationDetailsProps {
  region: string;
  selectedLocation: string;
}

var NAREGIONS = [
  ["Alabama", "AL"],
  ["Alaska", "AK"],
  ["American Samoa", "AS"],
  ["Arizona", "AZ"],
  ["Arkansas", "AR"],
  ["Armed Forces Americas", "AA"],
  ["Armed Forces Europe", "AE"],
  ["Armed Forces Pacific", "AP"],
  ["California", "CA"],
  ["Colorado", "CO"],
  ["Connecticut", "CT"],
  ["Delaware", "DE"],
  ["District Of Columbia", "DC"],
  ["Florida", "FL"],
  ["Georgia", "GA"],
  ["Guam", "GU"],
  ["Hawaii", "HI"],
  ["Idaho", "ID"],
  ["Illinois", "IL"],
  ["Indiana", "IN"],
  ["Iowa", "IA"],
  ["Kansas", "KS"],
  ["Kentucky", "KY"],
  ["Louisiana", "LA"],
  ["Maine", "ME"],
  ["Marshall Islands", "MH"],
  ["Maryland", "MD"],
  ["Massachusetts", "MA"],
  ["Michigan", "MI"],
  ["Minnesota", "MN"],
  ["Mississippi", "MS"],
  ["Missouri", "MO"],
  ["Montana", "MT"],
  ["Nebraska", "NE"],
  ["Nevada", "NV"],
  ["New Hampshire", "NH"],
  ["New Jersey", "NJ"],
  ["New Mexico", "NM"],
  ["New York", "NY"],
  ["North Carolina", "NC"],
  ["North Dakota", "ND"],
  ["Northern Mariana Islands", "NP"],
  ["Ohio", "OH"],
  ["Oklahoma", "OK"],
  ["Oregon", "OR"],
  ["Pennsylvania", "PA"],
  ["Puerto Rico", "PR"],
  ["Rhode Island", "RI"],
  ["South Carolina", "SC"],
  ["South Dakota", "SD"],
  ["Tennessee", "TN"],
  ["Texas", "TX"],
  ["US Virgin Islands", "VI"],
  ["Utah", "UT"],
  ["Vermont", "VT"],
  ["Virginia", "VA"],
  ["Washington", "WA"],
  ["West Virginia", "WV"],
  ["Wisconsin", "WI"],
  ["Wyoming", "WY"],
  ["Alberta", "AB"],
  ["British Columbia", "BC"],
  ["Manitoba", "MB"],
  ["New Brunswick", "NB"],
  ["Newfoundland", "NF"],
  ["Northwest Territory", "NT"],
  ["Nova Scotia", "NS"],
  ["Nunavut", "NU"],
  ["Ontario", "ON"],
  ["Prince Edward Island", "PE"],
  ["Quebec", "QC"],
  ["Saskatchewan", "SK"],
  ["Yukon", "YT"],
  ["Newfoundland and Labrador", "NL"],
];

var EUREGIONS = [
  ["Albania", "AL"],
  ["Andorra", "AD"],
  ["Armenia", "AM"],
  ["Austria", "AT"],
  ["Belgium", "BE"],
  ["Bulgaria", "BG"],
  ["Bosnia and Herzegovina", "BA"],
  ["Belarus", "BY"],
  ["Switzerland", "CH"],
  ["Czech Republic", "CZ"],
  ["Germany", "DE"],
  ["Denmark", "DK"],
  ["Estonia", "EE"],
  ["Finland", "FI"],
  ["United Kingdom", "GB"],
  ["Georgia", "GE"],
  ["Greece", "GR"],
  ["Croatia", "HR"],
  ["Hungary", "HU"],
  ["Ireland", "IE"],
  ["Iceland", "IS"],
  ["Italy", "IT"],
  ["Liechtenstein", "LI"],
  ["Lithuania", "LT"],
  ["Luxembourg", "LU"],
  ["Latvia", "LV"],
  ["Moldova", "MD"],
  ["Macedonia", "MD"],
  ["Montenegro", "ME"],
  ["Norway", "NO"],
  ["Poland", "PL"],
  ["Portugal", "PT"],
  ["Romania", "RO"],
  ["Serbia", "RS"],
  ["Slovakia", "SK"],
  ["Slovenia", "SI"],
  ["Sweden", "SE"],
  ["Turkey", "TR"],
  ["Ukraine", "UA"],
  ["Kosovo", "XK"],
  ["Netherlands", "NL"],
  ["Spain", "ES"],
  ["France", "FR"],
  ["Portugal", "PT"],
  ["Cyprus", "CY"],
];

const LocationDetails: React.FC<LocationDetailsProps> = ({
  region,
  selectedLocation,
}) => {
  var regions = region === "NA" ? NAREGIONS : EUREGIONS;

  const convertRegion = (input: string, to: string) => {
    if (!input || !to) {
      // Handle missing input or conversion type
      return "Invalid input or conversion type";
    }

    if (to === "TO_ABBREVIATED") {
      input = input.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });

      const matchingRegion = regions.find((region) => region[0] === input);

      if (matchingRegion) {
        return matchingRegion[1];
      } else {
        // Handle case where no matching region is found
        return "Unknown region";
      }
    } else if (to === "TO_NAME") {
      input = input.toUpperCase();
      const matchingRegion = regions.find((region) => region[1] === input);

      if (matchingRegion) {
        return matchingRegion[0];
      } else {
        // Handle case where no matching region is found
        return "Unknown region";
      }
    }

    // Handle unknown conversion type
    return "Invalid conversion type";
  };

  return (
    <>
      {selectedLocation === ""
        ? "Choose Location"
        : `${selectedLocation} - ${convertRegion(selectedLocation, "TO_NAME")}`}
    </>
  );
};

export default LocationDetails;
