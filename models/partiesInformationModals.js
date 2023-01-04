const mongoose = require("mongoose")
const partiesInformationSchema = mongoose.Schema({
    partiesInformationData: { type : Date, required: true },
    partiesInformationCode: { type: String, required: true },
    partiesInformationCategory: { type: String, required: true },
    partiesInformationName: { type: String, required: true },
    partiesInformationContactPerson: { type: String, required: true },
    partiesInformationContactNo: { type: String, required: true },
    partiesInformationAlternateContactNo: { type: String, required: true },
    partiesInformationEmail: { type: String, required: true },
    partiesInformationCO: { type: String, required: true },
    partiesInformationFreshParty: { type: Boolean, required: true },
    partiesInformationPartyStatus: { type: Boolean, required: true }, 
    partiesInformationNTN: { type: String, required: true },
    partiesInformationGST: { type: String, required: true },
    partiesInformationPartyAddress: { type: String, required: true },
    partiesInformationviewDeleted: { type: Boolean, required: true },
})
module.exports = mongoose.model("partiesInformation", partiesInformationSchema)