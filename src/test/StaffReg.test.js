// import {render, screen, fireEvent } from "@testing-library/react";
// import React from "react";
// import "@testing-library/jest-dom";
// import "";
// import Sidebar from "../components/Sidebar/Sidebar";
// import { createMemoryHistory } from "history";
// import { Router } from "react-router"

// const staffMember = {
//     _id: "629b232fe48d0ec1f5ed6962",
//     user_type: "Staff",
//     firstName: "Pamudu",
//     lastName: "Ratnayake",
//     email: "pamudu@gmail.com",
//     password: "1234",
//     faculty: "Faculty of Business",
//     reg_no: "IT19990415"
// }

// const createRouterWrapper = 
// (history) =>
// ({children}) =>
// <Router history = {history}>{children}</Router>

// describe("Staff Member",() ={
//     it("check whether staff portal is displayed when rendering the staff header", async() => {
//         render(<Sidebar layout="staff"/>);
//         const portalName = screen.getByText(/Staff Portal/i);
//         expect(portalName).toBeInTheDocument();
//     });

//     it("check whether navigation to my groups work", () => {
//         const history = createMemoryHistory();
//         render(<StaffHeader/>, {wrapper: createRouterWrapper(history)});
//         fireEvent.click(screen.getByText("My Groups"));
//         expect(history.location.pathname).toBe("/staff/mygroups");
//     });

//     it("Check whether navigation to my groups work",() => {
//         const history = createMemoryHistory();
//         render(<StaffHeader/>, {wrapper: createRouterWrapper(history)});
//         fireEvent.click(screen.getByText("My Groups"));
//         expect(history.location.pathname).toBe("/staff/mygropus");
//     });

//     it("Check whether navigation to supervisor topic request work",() => {
//         const history = createMemoryHistory();
//         render(<StaffHeader/>, {wrapper: createRouterWrapper(history)});
//         fireEvent.click(screen.getByText("Supervisor Req"));
//         expect(history.location.pathname).toBe("/staff/supervisor/topicReq");
//     });

//     it("check whether navigation to co-supervisor topic request work" , () =>{
//         const history = createMemoryHistory();
//         render(<StaffHeader/>, {wrapper: createRouterWrapper(history)});
//         fireEvent.click(screen.getByText("co-Supervisor Req"));
//         expect(history.location.pathname).toBe("/staff/cosupervisor/topicReq");
//     });

//     it("check whether navigation to student submisson work" , () =>{
//         const history = createMemoryHistory();
//         render(<StaffHeader/>, {wrapper: createRouterWrapper(history)});
//         fireEvent.click(screen.getByText("co-Supervisor Req"));
//         expect(history.location.pathname).toBe("/staff/studentSubmission");
//     });


// });
