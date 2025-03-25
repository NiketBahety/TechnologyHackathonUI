import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CustomerInfo from "./CustomerInfo";
import RecommendedServices from "./RecommendedServices";
import SentimentAnalysis from "./SentimentAnalysis";
import TransactionInsights from "./TransactionInsights";
import { Grid2, Paper } from "@mui/material";

import {
  getCustomerInfo,
  getRecommendations,
  getTransactionData,
} from "../api";

const CustomerInsights = () => {
  const { id } = useParams();

  const dummyData = {};

  const dummyRecommendedServices = [
    {
      Product_Name: "Premium Savings Account",
      Reason:
        "Based on your high monthly savings and transaction history, a premium savings account with higher interest rates would be beneficial.",
    },
    {
      Product_Name: "Credit Card with Rewards",
      Reason:
        "You frequently shop online and travel often. A rewards credit card with cashback on purchases and travel benefits would suit your needs.",
    },
    {
      Product_Name: "Home Loan",
      Reason:
        "Your recent inquiries about real estate and steady income indicate that a home loan with flexible EMIs might be a suitable option.",
    },
  ];

  const sentimentData = {
    overallSentiment: 0.7,
    productSentiments: [
      { name: "Premium Savings Account", sentiment: 0.9 },
      { name: "Credit Card with Rewards", sentiment: 0.4 },
      { name: "Home Loan", sentiment: 0 },
      { name: "Personal Loan", sentiment: 0.3 },
      { name: "Investment Plans", sentiment: 0.6 },
      { name: "Car Loan", sentiment: 1 },
    ],
    insights: `
    Overall, customer sentiment towards the bank is largely positive, with an overall sentiment score of 0.7. 
    Customers are particularly satisfied with the Premium Savings Account and Car Loan products, both of which have 
    high sentiment scores of 0.9 and 1 respectively. However, the Credit Card with Rewards product has received 
    extremely negative feedback, with a sentiment score of -1, indicating a need for significant improvement. 
    The Home Loan and Personal Loan products are viewed more neutrally, with sentiment scores close to 0. 
    Investment Plans, while slightly negative with a sentiment score of -0.6, suggest room for improvement in customer 
    satisfaction. 
    Moving forward, the focus should be on enhancing the Credit Card with Rewards program and reviewing customer 
    concerns related to the Investment Plans.
  `,
  };

  const dummyTransactionInsights = {
    averageMonthlyTransactions: 20, // Average number of transactions per month
    averageMonthlyAmountSpent: 400, // Average amount spent per month
    mostFrequentCategory: "Dining", // Most frequent category of transactions
    monthlyTransactionData: [
      {
        month: "January 2025",
        transactionCount: 18, // Number of transactions in January
        totalAmount: 450, // Total amount spent in January
      },
      {
        month: "February 2025",
        transactionCount: 22, // Number of transactions in February
        totalAmount: 500, // Total amount spent in February
      },
      {
        month: "March 2025",
        transactionCount: 25, // Number of transactions in March
        totalAmount: 600, // Total amount spent in March
      },
      {
        month: "April 2025",
        transactionCount: 15,
        totalAmount: 300,
      },
      {
        month: "May 2025",
        transactionCount: 20,
        totalAmount: 400,
      },
      {
        month: "June 2025",
        transactionCount: 23,
        totalAmount: 525,
      },
      {
        month: "July 2025",
        transactionCount: 19,
        totalAmount: 450,
      },
      {
        month: "August 2025",
        transactionCount: 21,
        totalAmount: 480,
      },
      {
        month: "September 2025",
        transactionCount: 20,
        totalAmount: 460,
      },
      {
        month: "October 2025",
        transactionCount: 18,
        totalAmount: 420,
      },
      {
        month: "November 2025",
        transactionCount: 22,
        totalAmount: 490,
      },
      {
        month: "December 2025",
        transactionCount: 24,
        totalAmount: 540,
      },
    ],
  };

  const servicesImprovementData = {
    overallImprovement:
      "Focus on enhancing customer experience with the Credit Card with Rewards and refining Investment Plans for better returns and transparency.",
    productRecommendations: [
      {
        name: "Premium Savings Account",
        improvement:
          "Maintain current offerings and explore additional perks to retain customer satisfaction.",
      },
      {
        name: "Credit Card with Rewards",
        improvement:
          "Revamp the rewards program to offer better incentives and address customer pain points related to fees or redemption options.",
      },
      {
        name: "Home Loan",
        improvement:
          "Improve transparency in loan terms and offer personalized guidance to increase customer confidence.",
      },
      {
        name: "Personal Loan",
        improvement:
          "Streamline the approval process and provide competitive interest rates to attract more customers.",
      },
      {
        name: "Investment Plans",
        improvement:
          "Enhance investment options with clearer risk assessments and better customer education.",
      },
      {
        name: "Car Loan",
        improvement:
          "Continue offering competitive rates and consider adding flexible repayment options.",
      },
    ],
    insights: `
    Overall, the focus should be on improving customer experience with the Credit Card with Rewards and refining Investment Plans. 
    The Premium Savings Account and Car Loan are well-received, so maintaining their current benefits is crucial. 
    Enhancing transparency in loan products and streamlining application processes can further boost customer satisfaction.
    `,
  };

  const [customerData, setCustomerData] = useState();
  const [recommendedServices, setRecommendedServices] = useState();
  const [sentiments, setSentiments] = useState();
  const [transactionInsights, setTransactionInsights] = useState();
  const [serviceOptimization, setServiceOptimization] = useState();
  const [prediction, setPrediction] = useState();

  useEffect(() => {
    const getData = async () => {
      const customerInfo = await getCustomerInfo(id);
      const recommendations = await getRecommendations(id);
      const transactions = await getTransactionData(id);

      setCustomerData({ ...customerInfo, summary: recommendations.profile });
      setRecommendedServices(recommendations?.products?.Products);
      setSentiments({
        productSentiments: recommendations.products_sentiment,
        overallSentiment: transactions.prediction.score,
      });
      setTransactionInsights(
        transactions.transaction_insights.Transaction_Insights
      );
      setPrediction(transactions.prediction.predicted);
      setServiceOptimization(servicesImprovementData);
    };
    getData();
  }, []);

  return (
    <Grid2>
      <Paper sx={{ backgroundColor: "#ffffff", padding: 2 }}>
        <CustomerInfo customerData={customerData} />
      </Paper>
      <Paper sx={{ backgroundColor: "#f4f4f4", padding: 3 }}>
        <RecommendedServices productRecommendations={recommendedServices} />
      </Paper>
      <Paper sx={{ backgroundColor: "#ffffff", padding: 2 }}>
        <SentimentAnalysis sentiments={sentiments} />
      </Paper>
      <Paper sx={{ backgroundColor: "#f4f4f4", padding: 3 }}>
        <TransactionInsights
          transactionInsights={transactionInsights}
          predictions={prediction}
        />
      </Paper>
    </Grid2>
  );
};

export default CustomerInsights;
