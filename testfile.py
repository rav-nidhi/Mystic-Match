import streamlit as st

st.write("LOGIN | SIGN UP")
first = st.text_input("First Name")
last = st.text_input("Last Name")
email = st.text_input("Email Address")
user= st.text_input("Username")
password = st.text_input("Password")
confirm = st.text_input("Confirm Password")

st.write(f"Your name is {first}")

