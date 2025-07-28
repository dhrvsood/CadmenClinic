# CADMEN Clinic
Website and bookings flow for Toronto’s #1 choice for medical-grade hair restoration and aesthetic treatments. 

## Technologies
### Frontend
- [**Next.js**](https://nextjs.org/docs/pages): JavaScript, pages router
- [**Zustand**](https://zustand.docs.pmnd.rs/getting-started/introduction): Global stores
- [**Tailwind**](https://tailwindcss.com/docs/): Styling
### Backend
- [**Vercel**](https://vercel.com) (serverless)
### APIs
- [**Bookings & EMR System**](https://docs.zenoti.com/docs/overview): Zenoti
- [**Email**](https://resend.com/docs/introduction): Resend
- [**SMS**](https://developers.dialpad.com/docs/welcome): DialPad

## Installation
1. Clone the repository
```
git clone https://github.com/dhrvsood/CadmenClinic.git
cd CadmenClinic
```
2. Install dependencies
```
npm install
```
3. Set up environment variables in `.env.local`

## Usage
To run the development server locally:
```
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

## Future Plans
- [ ] New styles for Skin treatment and Wellness service pages
- [ ] Sunsetting Plasmic and cleaning up auto-generated code within codebase
- [ ] Integration of membership program
- [ ] Use Notion for blog setup
- [ ] Sandbox environment and automated tests for bookings API
