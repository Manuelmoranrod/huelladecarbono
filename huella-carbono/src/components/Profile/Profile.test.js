import React from "react";
import Profile from "./Profile";
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
//import userContext from "../../context/userContext";


test('Learn React link is visible', () => {
  
  //const { user, setUser } = useContext(userContext);
  render(<Profile />);
  const linkElement = screen.queryByText('Hola Alias,');
  expect(linkElement).toBeVisible();
});
