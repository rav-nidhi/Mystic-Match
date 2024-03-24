import streamlit as st

with st.form("my_form"):
   st.write("LOGIN | SIGN UP")
   first = st.text_input("First Name")
   last = st.text_input("Last Name")
   email = st.text_input("Email Address")
   user= st.text_input("Username")
   password = st.text_input("Password", type = "password")
   confirm = st.text_input("Confirm Password", type = "password")

   # Every form must have a submit button.
   submitted = st.form_submit_button("Create Account")
   if submitted:
       st.write("Account Created!")


