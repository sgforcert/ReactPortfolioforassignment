import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import './Footer.css';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div class=" text-center">
      <div id="footerDiv" class="row">
        <div id="footerContactMe" class="col-4">
          <div>Contact Me:</div>
        </div>
        <div class="col-4">
          <div id="icons">
            <div id="LinkedIn">
              <a class="myDataLink" href="https://www.linkedin.com/in/shobha-g-187bb2287/"
                target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="var(--aqua)" viewBox="0 0 24 24" width="45" height="45">
                  <path d="M22.225 0h-20.45C.997 0 0 .997 0 2.225v19.55C0 23.003.997 24 2.225 24h20.55C23.003 24 24 23.003 24 22.225v-19.55C24 .997 23.003 0 22.225 0zM7.157 20.452H3.75V9h3.407v11.452zm-1.703-12.973c-1.086 0-1.967-.878-1.967-1.966s.881-1.967 1.967-1.967c1.088 0 1.967.878 1.967 1.967s-.879 1.966-1.967 1.966zm15.386 12.973h-3.407v-5.845c0-1.39-.028-3.183-1.938-3.183-1.938 0-2.236 1.514-2.236 3.079v6.949h-3.407V9h3.26v1.558h.046c.454-.862 1.556-1.773 3.208-1.773 3.431 0 4.065 2.26 4.065 5.203v6.464z" />
                </svg>
              </a>
            </div>
            <div id="GitHub" >
              <a class="myDataLink" href="https://github.com/sgforcert"
                target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="var(--aqua)" viewBox="0 0 24 24" width="45" height="45">
                  <path d="M12 .5C5.373.5 0 5.873 0 12.5c0 5.032 3.247 9.296 7.688 10.839.563.103.75-.245.75-.545v-2.196c-3.125.682-3.794-1.507-3.794-1.507-.513-1.298-1.25-1.645-1.25-1.645-1.022-.697.078-.683.078-.683 1.134.079 1.83 1.167 1.83 1.167 1.008 1.726 2.64 1.226 3.283.938.102-.73.394-1.226.716-1.505-2.665-.304-5.466-1.333-5.466-5.935 0-1.313.469-2.385 1.235-3.22-.124-.304-.536-1.537.116-3.199 0 0 1.007-.323 3.303 1.229.956-.267 1.985-.4 3.005-.404 1.02.004 2.048.137 3.005.404 2.296-1.552 3.303-1.229 3.303-1.229.653 1.662.241 2.895.117 3.199.767.835 1.234 1.907 1.234 3.22 0 4.61-2.806 5.617-5.469 5.92.405.35.767 1.034.767 2.08v3.088c0 .303.187.653.756.545C20.753 21.796 24 17.532 24 12.5 24 5.873 18.627.5 12 .5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div id="myData" class="col-4">
          <div>
            <div id="phone">
              +1 (480) 7692153
            </div>
            <div id="email">
              sgforcert@gmail.com
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default NavTabs;