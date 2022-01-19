import sendEmail from './transport.js'

export default {
  createCustomer: (parent, args, context) => {
    const customerId = 1;
    await Customers.insertOne({ _id: customerId, ...args.customer });
    
    await sendEmail({
      to: args.emailAddress,
      from: settings?.support?.email,
      subject: "Reset Your Password",
      template: "reset-password",
      templateVars: {
        emailAddress: args.emailAddress,
        resetLink,
      },
    });

    return true;
  },
};