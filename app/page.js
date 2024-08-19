import Image from "next/image";
import React from "react";
import {
  Container,
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Grid,
} from "@mui/material";
import { SignIn, SignedOut, UserButton } from "@clerk/nextjs";
import Head from "next/head";

export default function Home() {
  //Define flashcards here
  const flashcards = [
    { question: "What is an algorithm?", answer: "An algorithm is a step-by-step procedure or formula for solving a problem or completing a task." },
  { question: "What is the difference between a stack and a queue?", answer: "A stack follows Last In, First Out (LIFO) principle, while a queue follows First In, First Out (FIFO) principle." },
  { question: "What is a binary tree?", answer: "A binary tree is a data structure where each node has at most two children, referred to as the left child and the right child." },
  { question: "What is Big O notation?", answer: "Big O notation is a mathematical notation used to describe the asymptotic behavior of an algorithm in terms of time and space complexity." },
  { question: "What is encapsulation in object-oriented programming?", answer: "Encapsulation is an object-oriented programming principle that restricts access to certain components of an object and only allows interaction through well-defined interfaces." },
  { question: "What is a hash table?", answer: "A hash table is a data structure that maps keys to values using a hash function, allowing for efficient data retrieval." },
  { question: "What is recursion?", answer: "Recursion is a programming technique where a function calls itself in order to solve a problem. It generally requires a base case to stop the recursive calls." },
  { question: "What is the purpose of a database index?", answer: "A database index improves the speed of data retrieval operations on a database table by creating a data structure that allows for faster search queries." },
  { question: "What is the difference between a process and a thread?", answer: "A process is an independent program in execution with its own memory space, while a thread is a smaller unit of a process that shares memory space with other threads of the same process." },
  { question: "What is the principle of separation of concerns?", answer: "The principle of separation of concerns involves organizing a computer program into distinct sections, each addressing a specific concern or responsibility, to reduce complexity and improve maintainability." }
  ];
  
  return (
    <main>
      <Container maxWidth="lg">
        <Head>
          <title>Flashcard SaaS</title>
          <meta name="description" content="Create flashcards from your text" />
        </Head>

        <AppBar position="static" sx={{ backgroundColor: "#0D47A1" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Flashcard SaaS
            </Typography>
            <SignedOut>
              <Button color="inherit" href="/signin" sx={{ ml: 2 }}>
                Login
              </Button>
              <Button color="inherit" href="/sign-up" sx={{ ml: 2 }}>
                Sign Up
              </Button>
            </SignedOut>
            <SignIn>
              <UserButton />
            </SignIn>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            textAlign: "center",
            my: 8,
            px: 3,
            py: 8,
            backgroundColor: "#E3F2FD", 
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ color: "#0D47A1", padding: "8px", borderRadius: "4px" }}
          >
            Welcome to Flashcard SaaS
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ color: "#0D47A1" }}
          >
            The easiest way to create flashcards from your text.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mr: 2, backgroundColor: "#1976D2" }} 
              href="/sign-up"
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{ borderColor: "#1976D2", color: "#1976D2" }} 
            >
              Learn More
            </Button>
          </Box>
        </Box>

        <Box sx={{ my: 8 }}>
          <Typography variant="h3" gutterBottom textAlign={"center"} sx={{ color: "#white" }}>
            Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", px: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: "#white" }}>
                  Easy Text Input
                </Typography>
                <Typography sx={{ color: "#white" }}>
                  Simply input your text and let our software do the rest.
                  Creating flashcards has never been easier.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", px: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: "#white" }}>
                  Smart Flashcards
                </Typography>
                <Typography sx={{ color: "#white" }}>
                  Our AI intelligently breaks down your text into concise
                  flashcards, perfect for studying.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", px: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: "#white" }}>
                  Accessible Anywhere
                </Typography>
                <Typography sx={{ color: "#white" }}>
                  Access your flashcards from any device, at any time. Study on
                  the go with ease.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Pricing section with a dark blue background and light blue highlights */}
        <Box
          sx={{
            my: 8,
            textAlign: "center",
            py: 6,
            px: 4,
            backgroundColor: "#0D47A1", // Dark blue background
            color: "white",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Pricing
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 4,
                  border: "1px solid #E3F2FD", // Light blue border
                  borderRadius: 2,
                  backgroundColor: "#1976D2", // Medium blue background
                  color: "white",
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Basic
                </Typography>
                <Typography variant="h6" gutterBottom>
                  $5 / month
                </Typography>
                <Typography>
                  Access to basic flashcard features and limited storage.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 2, color: "white", backgroundColor: "#64B5F6" }} // Light blue button
                >
                  Choose Basic
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 4,
                  border: "1px solid #E3F2FD", // Light blue border
                  borderRadius: 2,
                  backgroundColor: "#2196F3", // Medium blue background
                  color: "white",
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Pro
                </Typography>
                <Typography variant="h6" gutterBottom>
                  $10 / month
                </Typography>
                <Typography>
                  Unlimited flashcards and storage, with priority support.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 2, color: "white", backgroundColor: "#64B5F6" }} // Light blue button
                >
                  Choose Pro
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      
        {/* Flashcards section */}
        <Box sx={{ my: 8, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom sx={{ color: "#0D47A1" }}>
            Flashcards
          </Typography>
          <Grid container spacing={4}>
            {flashcards.map((flashcard, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Flashcard flashcard={flashcard} />
              </Grid>
            ))}
          </Grid>
        </Box>
      
      </Container>
    </main>
  );
}
