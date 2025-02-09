export default function LandingPage(){

    return(
        <>

            <div className="registerPage">
                <div className="logo">
                    <span>VENTURE LINK</span>
                    <svg width="30" height="31" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.9166 35.9167H14.5833C11.7013 35.9167 9.2451 34.9007 7.21454 32.8687C5.18399 30.8368 4.16802 28.3806 4.16663 25.5C4.16524 22.6194 5.18121 20.1632 7.21454 18.1312C9.24788 16.0993 11.7041 15.0833 14.5833 15.0833H22.9166V19.25H14.5833C12.8472 19.25 11.3715 19.8576 10.1562 21.0729C8.94093 22.2882 8.33329 23.7639 8.33329 25.5C8.33329 27.2361 8.94093 28.7118 10.1562 29.9271C11.3715 31.1424 12.8472 31.75 14.5833 31.75H22.9166V35.9167ZM16.6666 27.5833V23.4167H33.3333V27.5833H16.6666ZM27.0833 35.9167V31.75H35.4166C37.1527 31.75 38.6284 31.1424 39.8437 29.9271C41.059 28.7118 41.6666 27.2361 41.6666 25.5C41.6666 23.7639 41.059 22.2882 39.8437 21.0729C38.6284 19.8576 37.1527 19.25 35.4166 19.25H27.0833V15.0833H35.4166C38.2986 15.0833 40.7555 16.0993 42.7875 18.1312C44.8194 20.1632 45.8347 22.6194 45.8333 25.5C45.8319 28.3806 44.8159 30.8375 42.7854 32.8708C40.7548 34.9042 38.2986 35.9194 35.4166 35.9167H27.0833Z" fill="#003262"/>
                    </svg>
                </div>
                <div className="design-triangle"></div>
                <div className="login-container">
                    <div className="login-cont-left">
                        <div className="header-login">
                            LOGIN / SIGN-IN
                        </div>
                        <div className="input-login username">
                            <input type="text"  className="username-input input" placeholder="Username"/>
                        </div>
                        <div className="input-login password">
                            <input type="password" className="password-input input" placeholder="Password"/>
                        </div>
                        <div className="submit-button">
                            <button>SUBMIT</button>
                        </div>
                        
                        <div className="remember-me">
                            <input type="radio" />
                            remember me
                        </div>

                        <div className="forgot-password">Forgot password ?</div>

                        <div className="new-user">
                            New User ? <span>Sign-up</span>
                        </div>  
                    </div>
                                                            
                </div>
            </div>
        </>
    )
}