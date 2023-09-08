import React from 'react'
import {FiDownload} from 'react-icons/fi'
import '../assets/css/downloadbtn.css'
const DownloadBtn = () => {
  return (
    <a className="downloadbtn text-white" href='https://drive.google.com/u/0/nonceSigner?nonce=rrgs9d1maohcm&continue=https://doc-0o-b4-docs.googleusercontent.com/docs/securesc/dbevptn6skgl3fc9chhas3dcvds7se5u/fbaiv6hbbv62vr4io7g1b66pan1ek0se/1694183325000/02688516426780287951/02688516426780287951/1B4pCv2M0OYDnzgZdGU7RSZhYjIUpGHdN?e%3Ddownload%26ax%3DAH3YgiBTw6z6C4WLiAlr7B9bi1SWfg6ozE8dw0mAbsaFWoqWq2iMQDAk53NigQqZ_fa8-yoJCGIgt_h0k-FaoTzrFGLziSNRyatlUdob7epEwLY3WHxk_ngOFN1N9PpY9NEYo6-R5YnNG1QD_k0_ZErIDaDTMGeC-6aJ_qywv0YtUwKR8trjrIk5fUl3hpyeGnjL4XaVsBLNAPXCorMR2cq6yNpsKJQaGL2Gmv16DxP5OzR8C02GCprpgxh-bTqVTDQM5HhSlArm_dBvSiGc2E8q6Gc_-jCaY_ayd_G4Jkp2SNCqrNghY_bMe9LYlLQKWxsLyiCJIYQosl5S-1JIjLYK-K8vhADiP1CnRlGIKiE2H2UVxQCAOeVJPTRwus5i5_UrimJUYYSDK86WgIZ4NKHbHTmeir3sC6wZ07tVyh8HWBxRPFvNetZMcdVWjGZ6J8RgJQeeXWMHr7gc6p5nYxkjq99VehGzJ3RMTUjaAkdttqrjKlqM7sG6KETQBQyxbPSQMjBabbkM7wAc2aQzv5dtgCx5vLTFifbZq8bRxXVaVRcHS8Cn-h8OH7W0UuBz99hU252EgqXQ8m9gy9fQL42SkiQnD5lwhMpdUJZWoRYYhUwUv_CLqBkOjc_yEtXEXn7YWzowkADND76KfinY_L9KgQtbCPE0Ys2Od-0kTsWeNX3a-EO-hSaFJn30uRnpcMAZpN3j4nNallXCWvaSjQkOf8nTFIBoRIhCa8iAnvc6U5cPo6c1TUi_iJtaa5LXnqQbfqRh8KsOmvP4gmNzp-bxBMnCwz4UlJ9HywnhYuSSMviUjESzOVzDegdgOMFM1b5KIMuGobhL4nk7W3t5y2Xmr6dSaXd_imoE2AQI8_Tk_o0LFJN2XC4B1aZfMZTrelh1AA%26uuid%3Dd29de213-dbd3-4191-b78e-609bb4530b5d%26authuser%3D0&hash=b2pd40v3phoujoop6o7bnsatrtmohv9q' download>
      <p className="text text-white font-light">Download CV</p>
      <span className="icon-container"> 
        <FiDownload className="text-white text-base"/>
      </span>
    </a>
  )
}

export default DownloadBtn