import React from "react";
import './home.css';
import FeaturedInfo from "./FeaturedInfo";
import Request from "./Request";
import Accept  from "./Accept";

const data_new=[{"name":"Anna", "job":"Electronic Engineering", "email":"orangejwi0618@naver.com", "metamask":"0x15e6ebbcccccc"},
{ "name":"Tom", "job":"Soft Engineering", "email": "dlswl0618@inu.ac.kr", "metamask":"0x14e6ecbb6c60f1d4032"}
]
const data_req=[{"name": "Susan", "date": "2 Jun 2024", "email": "abcd@inu.ac.kr"},
    {"name":"Dayun", "date":"3 Jun 2024", "email":"efgh@inu.ac.kr"}
]
const data_acc=[{"name": "Susan", "job":"Electronic Engineering" ,"email": "abcd@inu.ac.kr", "menu":"Americano"},
{"name":"Dayun", "job":"Soft Engineering", "email":"efgh@inu.ac.kr", "menu":"Latte"}
]

export default function Home() {
    return (
    <div className="home">
        <div className="homeWidgets"> 
            <Request
                name1={data_req[0].name}
                date1={data_req[0].date}
                email1={data_req[0].email}
            
                name2={data_req[1].name}
                date2={data_req[1].date}
                email2={data_req[1].email}
            />
        </div>
        <div className="accept">
        <Accept
            name1={data_acc[0].name}
            job1 = {data_acc[0].job}
            email1={data_acc[0].email}
            menu1={data_acc[0].menu}

            name2={data_acc[1].name}
            job2={data_acc[1].job}
            email2={data_acc[1].email}
            menu2={data_acc[1].menu}
        />
        </div>
    </div>

    )
}

<FeaturedInfo
          title="Today Revenue"
          revenue="200,000원 "
          comparedToYesterday="-11,000원"
        />