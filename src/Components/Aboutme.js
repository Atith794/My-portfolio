import React from "react";

const Aboutme = ()=>{
    return (
        <div id="#aboutmesection" className="aboutme">
            <h1 className="ah1">About Me</h1>
            <div className="abd3">
                <div className="abd1">
                    <p>I am a dedicated Software Engineer with a Mechanical Engineering background, currently contributing to innovative projects at Nexshore Technologies. Proficient in Java, JavaScript, React, Node.js, Express.js, and MongoDB, I specialize in crafting efficient and scalable full-stack applications. My journey into coding started at Acciojob, where I honed my skills through intensive training. Now, I apply my expertise in the MERN stack to deliver user-friendly and robust solutions</p>
                </div>
                <div className="abd2">
                    <div className="abd2d1">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD6UlEQVR4nO2ZbYgWVRTHf76urcr6tELkgoikabkIbiHlS4IolC8JGbIIfRRqW9KFgr6FpUiQ4Ad1zVCRSM0PUUIaJO6SKJKCYH2wWHuzlk1U9iV62XUnTvwHLsPs7MzzzMyOtH848Myduefc/zP33vO/Z2AU/x/UAvuBXqAP2Ke2+wZjgJeA3wEvYHeA14CxFByPAl+GEAjaV8ACCohq4C3g7xgkfOsH9gBTKQjWAT8mIBC0m8CLI0mgDjhZAYGgnQJm5UlgghZsb4okfPtDU3Ri1iSWAdcyIBC068DKLAjUaGHey4GEJxsEjgIPpkViLfBLjgS8gHUCL1RC4CH9I15B7JQ2mESw7fBWAQbvBewusEXqIRI2Hz8rwIC9YexToDQUiSeBH8pwatn8a6AVaFaCrNc0sGDjZCW11euZZvW5DPxTRtwbwBNhRH5O4OS21OxzwGQqx2T52i9hGXccP4U52wwMDNOxHdgIVDn9bL4+DjQCO/Xa7V/+HugC/pJ1qc3ufQLsADYB8wPjqNIabY+h1ax/KBqH6exm9w3AEeC3FOa8be8faMqNd+JETedIfTYpJpGujPOGj7D73XGyvkskbLBRAdI0H8H2X4GFxIBL5BHgaoGIfAvMjEMiSOQBbZltBSByAZhOAlQ5nasdch+HBDBR16EEugt4WYu1AZit5FpydraSig+z9cw69dkl+WG+BkPinAjskmUTQcWC3cA8oEVCMjVV6qBWvlsUa3e5hYqJQxBZDpwPefVZwZOdV+yKiPgZe2mIhMganmMWe0kaRL7Qdas2ADtkZY0azYgDin06DSLdup5B/qhz5HsiTAgh4hcZppA/piq2jaFsIv7Ar+h6Pfljg2Kb0EyE1Q6RZ9XWrGuT+U+TH5Y4tYKmpJ07HCL220+I55z27zIuQo9VDD/e2aQJ0U5xPY6DHrWh9fK2s/DXkB3WKobF2h7IZ7GwM0Tz2OHHxRtq/5zscEYxXi/XgX/EXAw85RxpXZT00cYKdXNIH3Olt/qiigtxidix9bEhiKBztd07RPo4It97K3HykZy872TUYyHPzZFs6NeZJc23MSDfppDLxnwNzrcBvZ0wtIqokU8Lx9N4Gz7edRb6exHPzdAngMGUquarFLMPeDgFf//ljIsy+x2FN51PACYmy0W1ykTmy3bF3DFeFUYbwIcV+DksH5ecvJU76jUdPH3FSoqtjii0nXJEsUYbg62XbQn6NamP5aTnKQhedb5mHRzm8FWjqqKnPq9QMGxSjdevFr4DLAKmyRokeTr1zJ+qIxcSc52jcZS1ReSowsBqWCukDr6Riu3Wb0ukz4z0AEdBDvgXt0zuG7INX50AAAAASUVORK5CYII="/>
                        <span>BE in Mechanical Engineering</span>
                    </div>
                    <div className="abd2d2">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACSklEQVR4nO2ZT0gUURzHP1l4EqFTykLIQmDRP0mWDLuVB70ZBVK3YA9dIoIo8RBR4cFDHhQ6dA+UDp4UIaJCJOgQhIcOQSBehv6BuqG1ypOv8Bgwx53n7HuuX/jtPub95vebz8783vxmFuA9sBaozaJBGfgRmJV17BsfEeEp2geosqL9M1BlRTV1BvLA1Ywt7xKgWIWbVNElQAEYzNgKLgF8VFRTAIXQL6Fi6EWcD30Z9VFRTQH0ANMZW49LgOCLuFFFlaU1ugTwUVEWAIcIFOAg8Az4A/wEbhEAQAMwBHwAZhR3CfirVyATwBRwF6jzEeBlbBUxMZuATkHYc/d8A6gHVoEF4ChwDjhizR8DTgMXgH86S2nlFOCK4nxMUNRl5duu28wM4KZimF92IIH/mPxNgbf7APBJMS7tYJ/72ueFDwDvFGO73sWul1Ht89QHgIu6fL4nXB4fKecccNgHgJyWya8J/e8oZz/p5AygSzFMcSbRZfmP4wlAM1DS8vgauL6FXyvwSq2FyfkAj+4D3frXxMRaUSt8ADiporWXT2OfHTR6ketW4q11gJPAG42/ASNa91e0zfim1a4B/LZAvljjZfVAuwJQAp5XaG0xgPPANaBD288CfUALcDwG0JYib2kTwP7FKrHeGIA5yK0UB+hNmfuXCXIi5QuoXAqAXMrc/8u1Y1UC4JX2HECTVXBmHAzAKeC2Cmyz2BaBh8CZEADm9W0eMYdlq7E5rwHWNDbPwHYfNB2b905P1FLfUB8Ul9lm5ozPY1dZ1wGwKVggmRQPaAAAAABJRU5ErkJggg=="/>
                        <span>Completed MERN Stack Development course at Acciojob</span>
                    </div>
                    <div className="abd2d3">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 30 30">
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                        <a href="https://github.com/Atith794">Github Profile</a>
                    </div>
                    <div className="abd2d4">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJ0lEQVR4nO2XMU4DMRBFH9AhSs5AlQOkzxGouQM1JRUSTehTpcohqJyCA1DQIJSOngsMQpo0q9VmszY76+g/yZ3lmbeesb0g6sImNgZzciLRmEQc7UhtpTUD3oEf4Bm4zgkWKbJqnCpPOcEiRTYNkZeOuVfArscRu40QWTeSeCwgkiJEHhpJ3OUE6+DfRS6BT5/zBpznBIu+EJc+5z4nUIE8Bi9wAdwC3z7nA1gAZzU1+9wTb0vkr8Ruamn2rwPJvOYEbUGPxj16NBbG9D/iqLQKYyqtji/R92Lrc3O3rbXtmUe4SDqwVhpLJAKTiKMdKYxNpdnbTqIqT610hEgaSyQCk4ijHSmMTaXZ9dZy1Ox71OyFMd0jjkqrMKbScmxiYzAnIyIYmV9kOvuqvr8nIAAAAABJRU5ErkJggg=="/>
                        <a href="https://drive.google.com/file/d/1PUjYW2aRbAlB8vYrTcCEhOfr-3XSGJCo/view?usp=drive_link">Resume</a>
                    </div>
                    <div className="abd2d5">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVklEQVR4nO2YzUrDQBCAv4Ne9ODBg4/Sm14Vn0DfwpcQwavURxDEp1AR8SaCD2AEf9qi4t2R4ApLs5Vs0tqZdj6Yy+ywO192k5CA4ziOVZaBY2AAiPIYAF1gKSXSVdCgZMZRSqQXBjvopxN6fU0N/lpaQUb1Ow6RSR+lRiLbwCNQAFs18mpFiij3UCP/5+QtERfh59gU4apv1sirPVpNmBmR/0TmRkSMRYWZE7GCuIgyxHcEWAVOgTfgBdgLX5bmduQk8dQ4w6DIR0LkM3PhcT1mpY1IP7FA36LIfWKBMjcNpI3Ic0LkCYMiOwmRXQyKLACXUe0VsGjxHik5iGoPqY8qkRXgOqq9CblpIE1E1oD96G9kHL0wVtaoFtkY8SIcjndgffL9Nxe5yzjHt6mJh+Zvc1+0EvnKWLisVSuiFXERZcjc7IgYiwoXCpqSzDivajiO42CAb1D1v8UOE43FAAAAAElFTkSuQmCC"/>
                        <a href="https://storage.googleapis.com/acciojob-user-content/profileShareLink/c2849943-caa0-4478-8bd1-ec17f3c92448-atith91098@gmail.com2024-03-23T11:17:01.120Z.jpeg">Acciojob Profile</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme