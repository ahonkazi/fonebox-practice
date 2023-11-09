"use client"
import React from 'react'
import './HeroSection.scss'
import HeroBg from '../../_assets/hero-bg.svg'
import HeroLeftContent from './HeroLeftContent'
import RightImage from './RightImage'
const HeroSection = () => {

  return (
    <>
      <main style={{ backgroundImage: "url(" + HeroBg?.src + ")" }} className='relative mt-6 hidden md:block bg-white py-8 bg-no-repeat bg-top sm:bg-right-bottom'>
        <MainContent />
      </main>
      <main className='relative mt-6 block md:hidden bg-white py-8 bg-no-repeat bg-top sm:bg-right-bottom'>
        <MainContent />
      </main>
    </>
  )
}

export default HeroSection



const MainContent = () => {
  return (
    <>
      <div className="wrapper flex items-center flex-col   site-container justify-between lg:flex-row">
        <HeroLeftContent />
        <RightImage />
      </div>
      {/* shapes */}
      <div className="shape-1 hidden sm:block absolute  sm:top-[30%] left-[1%] lg:left-0 2xl:left-[3%]  lg-translate-y-[50%]">
        <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.2915 27.1536C34.5502 25.8956 35.8395 24.668 37.1521 23.4674C38.1373 22.5658 39.1378 21.6749 40.1822 20.8402C40.5636 20.5352 42.462 19.6237 42.6221 19.2699C42.6306 19.2519 42.3536 18.7124 42.1735 19.0955C42.1341 19.1783 42.2161 19.6303 42.2203 19.6994C42.2559 20.2919 42.2125 20.8962 42.1746 21.4873C42.0859 22.8469 41.9266 24.2029 41.7539 25.5535C41.5128 27.4126 41.2377 29.2688 40.9179 31.117C40.84 31.5673 41.2293 32.071 41.6384 32.2152C42.9315 32.671 50.4449 35.179 50.1213 36.5276C49.8194 37.7823 45.8789 38.5475 44.8597 38.8327C43.5118 39.2097 42.1466 39.5414 40.7731 39.8162C40.6246 39.8463 40.5219 40.0014 40.4961 40.1392C40.1622 41.9056 39.7809 43.6637 39.3603 45.4119C39.0353 46.7616 38.6912 48.1127 38.269 49.4365C38.1004 49.9645 37.597 52.2233 36.9283 52.4677C35.6585 52.9331 31.8638 43.2959 31.2579 41.8003C31.1074 41.4313 30.7257 40.9171 30.2502 41.0353C28.6702 41.4309 27.0713 41.7619 25.4661 42.0413C24.5045 42.2091 19.0033 43.357 18.6151 42.2615C18.4025 41.6626 19.8085 40.1242 20.1375 39.7085C20.9845 38.6388 21.9348 37.6491 22.8974 36.6837C24.0511 35.5259 25.2451 34.4022 26.4786 33.3291C26.787 33.0608 26.5706 32.6075 26.3926 32.3392C25.5601 31.0864 20.5111 23.8039 21.9592 22.794C22.4966 22.4191 24.0451 23.1438 24.581 23.3315C25.7674 23.7463 26.9207 24.2548 28.0577 24.7829C29.619 25.5066 31.1595 26.2875 32.6688 27.1153C33.6245 27.6402 33.5623 26.2469 32.8872 25.8783C30.9542 24.8181 28.9716 23.8306 26.9543 22.9405C25.7517 22.4094 21.9352 20.3091 20.6871 21.6472C19.464 22.9566 21.6125 26.3383 22.2203 27.4861C23.227 29.3815 24.3524 31.2202 25.5374 33.0079C25.5079 32.6778 25.4795 32.3492 25.4513 32.018C23.6511 33.5818 21.9116 35.2406 20.3066 37.0048C19.1609 38.2627 16.4854 40.753 17.4589 42.7014C18.4704 44.7243 21.9991 44.0661 23.7352 43.8586C26.1815 43.5668 28.6201 43.0772 31.0099 42.4786C30.6741 42.2228 30.338 41.9695 30.0022 41.7136C31.4052 45.1779 32.8699 48.7616 34.9119 51.9029C35.4078 52.6674 36.4335 54.3758 37.5922 54.0086C38.8275 53.6177 39.3192 51.0806 39.6426 50.0445C40.3571 47.7519 40.8897 45.4001 41.3848 43.0526C41.512 42.4484 41.5735 41.7891 41.7609 41.2012C41.9151 40.7184 41.6583 41.2089 41.5906 41.2438C41.7953 41.1381 42.1616 41.1233 42.3835 41.0743C44.2042 40.674 52.3194 39.4518 51.4347 36.4537C50.9147 34.6917 48.2335 33.6528 46.7709 32.9628C45.0595 32.1572 43.2989 31.4421 41.5151 30.813C41.7561 31.1792 41.9946 31.545 42.2357 31.9112C42.6495 29.5119 43.0056 27.0965 43.2735 24.6755C43.4429 23.1441 44.3681 19.2516 42.8387 18.0796C41.3139 16.9108 38.4912 20.0549 37.5097 20.9151C35.7065 22.4924 33.964 24.1445 32.2698 25.8381C31.7403 26.3676 32.7893 27.6572 33.2915 27.1536Z" fill="#FFE0D6" />
          <path d="M27.5781 9.72868C28.3279 11.5645 29.0802 13.4007 29.83 15.2366C29.952 15.5374 30.2834 16.048 30.6695 16.0267C31.0275 16.0071 31.1438 15.7102 31.0088 15.3812C30.259 13.5453 29.5067 11.7091 28.7569 9.87326C28.6349 9.57252 28.3035 9.06192 27.9174 9.08314C27.5619 9.10304 27.4442 9.40106 27.5781 9.72868Z" fill="#FFE0D6" />
          <path d="M33.1527 8.64537C33.3034 10.5195 33.763 12.3084 34.5155 14.029C34.8898 14.884 36.1301 14.6703 35.6922 13.6704C35.0479 12.198 34.6699 10.6554 34.5418 9.05327C34.4816 8.29904 33.0714 7.62691 33.1527 8.64537Z" fill="#FFE0D6" />
          <path d="M12.62 27.6942C13.9422 28.0368 15.2644 28.3793 16.5866 28.7218C16.972 28.8212 16.9788 28.3292 16.902 28.095C16.7788 27.7204 16.4485 27.3992 16.0695 27.2994C14.7473 26.9568 13.4251 26.6143 12.1029 26.2717C11.7175 26.1724 11.7107 26.6644 11.7875 26.8986C11.9107 27.2732 12.2407 27.5969 12.62 27.6942Z" fill="#FFE0D6" />
          <path d="M10.5721 33.9941C11.7265 33.6416 12.8977 33.6607 14.0394 34.0561C14.4086 34.1839 14.7007 33.9035 14.698 33.5412C14.6939 33.1279 14.3458 32.7435 13.973 32.614C12.6291 32.1481 11.191 32.1203 9.83066 32.5364C9.01826 32.7823 9.84795 34.2139 10.5721 33.9941Z" fill="#FFE0D6" />
          <path d="M20.4515 48.4588C19.0802 49.3906 17.9359 50.5343 16.9794 51.8866C16.6077 52.4125 17.7342 53.6189 18.1825 52.9855C19.0852 51.7092 20.1864 50.6491 21.4774 49.771C22.0398 49.3878 21.0347 48.0617 20.4515 48.4588Z" fill="#FFE0D6" />
          <path d="M24.5839 51.9211C23.9785 53.2478 23.694 54.6406 23.704 56.0974C23.7081 56.7914 25.0362 57.5639 25.0285 56.5558C25.02 55.3265 25.2887 54.1249 25.7985 53.0087C26.0861 52.381 24.9034 51.2185 24.5839 51.9211Z" fill="#FFE0D6" />
          <path d="M51.2699 23.3329C52.979 22.7753 54.7288 22.6432 56.5024 22.9497C57.2923 23.086 56.5807 21.6231 55.9952 21.5195C54.142 21.1982 52.2695 21.3267 50.4811 21.9101C49.7931 22.1356 50.6853 23.5228 51.2699 23.3329Z" fill="#FFE0D6" />
          <path d="M51.615 28.1384C53.2008 28.4332 54.7842 28.7278 56.37 29.0226C56.7563 29.0941 56.77 28.6487 56.6868 28.3947C56.5712 28.0414 56.2306 27.6693 55.8529 27.6001C54.2671 27.3053 52.6837 27.0107 51.0979 26.7159C50.7116 26.6444 50.6978 27.0898 50.7811 27.3438C50.8992 27.6975 51.2387 28.0681 51.615 28.1384Z" fill="#FFE0D6" />
          <path d="M42.1345 49.9408C42.4715 51.8912 42.925 53.8139 43.5015 55.706C43.7174 56.4133 45.0449 56.8581 44.7266 55.8144C44.1852 54.0396 43.7558 52.2431 43.4394 50.4146C43.3774 50.0488 43.1041 49.5835 42.7145 49.4874C42.3937 49.41 42.0659 49.5463 42.1345 49.9408Z" fill="#FFE0D6" />
          <path d="M47.2716 48.2175C48.2925 50.1107 49.4046 51.944 50.6024 53.7307C51.1772 54.5874 52.0369 53.8927 51.4716 53.0511C50.3566 51.3876 49.3314 49.6742 48.3823 47.9104C47.9588 47.1256 46.7465 47.2449 47.2716 48.2175Z" fill="#FFE0D6" />
        </svg>
      </div>
      <div className="shape-2 absolute -bottom-[15%] left-[50%] -translate-x-[50%] md:-translate-x-0 md:-bottom-[15%] md:left-[37%]">
        <svg width="154" height="154" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M125.478 54.3455C114.956 52.652 109.387 54.1531 106.336 57.4876C103.282 60.8208 102.825 65.801 102.37 70.7824C102.075 74.2277 101.774 77.7433 100.771 80.6802C99.7263 83.7455 97.8885 86.2674 94.4794 87.7083C93.6703 88.0316 92.5268 88.1452 91.1477 87.9437C89.2455 87.7461 86.8075 87.1105 84.0461 86.1239C73.5089 82.5317 57.8399 74.6524 47.3698 72.1066C44.9762 71.4892 42.8502 71.1994 41.1548 71.305C39.6685 71.4235 38.5299 71.8299 37.9082 72.7396C37.4024 73.4784 37.2596 74.5117 37.4287 75.9639C37.7286 78.4159 39.0394 81.7189 41.5149 86.2275C43.6825 90.173 46.4398 93.8514 48.7076 97.7653C52.2625 103.881 55.8106 110.212 58.0566 116.591C58.192 117.011 57.9862 117.435 57.5882 117.563C57.1638 117.753 56.7353 117.505 56.6 117.086C54.3875 110.793 50.8822 104.552 47.3747 98.5288C45.0727 94.6737 42.3314 90.9298 40.1553 86.9807C37.5367 82.268 36.2065 78.7385 35.8987 76.1377C35.6378 74.2839 35.9385 72.8782 36.6308 71.8519C37.3301 70.8285 38.478 70.1349 39.9689 69.8727C41.9448 69.5183 44.6246 69.816 47.7474 70.5869C58.2525 73.1469 73.9795 81.0508 84.5533 84.658C87.1903 85.5936 89.5242 86.1862 91.323 86.4142C92.3857 86.5588 93.2541 86.5507 93.9031 86.2345C96.831 85.0331 98.3951 82.8362 99.3116 80.1551C100.269 77.3453 100.54 73.9625 100.845 70.5941C101.304 65.3235 101.934 59.9771 105.193 56.4369C108.455 52.8976 114.423 50.9777 125.717 52.8422C126.155 52.876 126.439 53.2834 126.374 53.6937C126.31 54.104 125.89 54.4417 125.478 54.3455Z" fill="#FFE0D6" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M125.94 53.5985C125.865 53.4951 125.644 53.2584 125.444 53.1037C124.502 52.2807 122.954 51.21 122.506 50.8808C118.655 47.7007 114.175 44.5536 109.445 42.6148C109.049 42.4522 108.856 42.0088 109.011 41.6355C109.191 41.1999 109.641 41.0204 110.038 41.1829C114.904 43.1779 119.503 46.4463 123.508 49.6167C123.937 50.011 125.51 51.0925 126.469 51.9226C126.818 52.2113 127.098 52.472 127.255 52.682C127.375 52.8766 127.441 53.0491 127.464 53.2039C127.552 53.5314 127.492 53.9436 127.325 54.3122C127.132 54.7423 126.783 55.1814 126.334 55.5795C125.421 56.4425 124.035 57.3299 122.934 58.0432C122.307 58.4411 121.764 58.8008 121.532 59.0697C119.543 61.3838 119.284 64.698 121.43 68.1982C121.646 68.5779 121.536 69.0426 121.173 69.2577C120.81 69.4728 120.334 69.3504 120.092 69.0326C117.538 64.7834 117.95 60.8762 120.348 58.0747C120.938 57.3703 123.072 56.2076 124.618 55.0218C125.082 54.6298 125.475 54.2808 125.733 53.9499C125.814 53.8378 125.861 53.7841 125.915 53.6608C125.917 53.6615 125.945 53.6004 125.94 53.5985Z" fill="#FFE0D6" />
        </svg>
      </div>
    </>
  )
}