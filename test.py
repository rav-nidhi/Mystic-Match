import streamlit as st

# Dummy data for organizations
orgs = [
    {"name": "Org A", "description": "Description A"},
    {"name": "Org B", "description": "Description B"},
    {"name": "Org C", "description": "Description C"},
]

# State to keep track of current org index and selected orgs
if 'indexw' not in st.session_state:
    st.session_state['index'] = 0
    st.session_state['selected_orgs'] = []

    # Buttons for swiping left or right
    col1, col2, col3 = st.columns(3)
    with col1:
        if st.button('Swipe Left ❌'):
            st.session_state['index'] += 1
    with col2:
        # Display current org
        if st.session_state['index'] < len(orgs):
            org = orgs[st.session_state['index']]
            st.write(f"#{org['name']}")
            st.write(org['description'])
    with col3:
        if st.button('Swipe Right ✔️'):
            st.session_state['selected_orgs'].append(org)
            st.session_state['index'] += 1
else:
    st.write("No more organizations to show.")

# Show selected organizations
if st.session_state['selected_orgs']:
    st.write("Selected Organizations:")
    for selected_org in st.session_state['selected_orgs']:
        st.write(selected_org['name'])


