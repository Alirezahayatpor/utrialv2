import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { blue } from '@mui/material/colors';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "خوش آمدید"


  return (
    <div style={{ direction: "ltr", minHeight: "11vh", }}>
      <br-x />
      <Window title={name}
        style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>
        {/* <pre style={{ direction: "ltr" }}>{JSON.stringify(props.books, null, 2)}</pre> */}
        <w-cse style={{ minWidth: 150, flex: 1, }}>
          {/* <f-cc class={css.test} style={{height:200,width:200,fontSize:30}}>
            درود
          </f-cc> */}
          {props.books.map(book => {
            return <c-x style={{ borderRadius: 5 , boxShadow:"" , width:232 , backgroundColor:""}}><img
              className={global.styles.hoverzoom_nofade}
              src={book.imageLink}
              style={{ width: 150, height: 200, objectFit: "fill", borderRadius: 5, backgroundColor : "blue", }} />

              <f-cc style={{ width: "100%", }}>
                
                {book.title}
                </f-cc>

                <f-csb  style={{ width:""}}>

                <f-13> {book.price} </f-13>


                  
                  
                  
                  <c-cc style={{backgroundColor:""}} >
                    <img src="https://irmapserver.ir/research/71/icons8-buying-30.png" alt="" />
                    
                    <img style={{width: "", height:"" , objectFit:"contain" }}/>


                  </c-cc>

                </f-csb>


              
              






            </c-x>


          })}

        </w-cse>

      </Window>
    </div>
  )
}

export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let books = await global.db.collection("books").find({}).toArray()


  for (let book of books) {
    book.imageLink = "https://irmapserver.ir/research/ex/books/" + book.imageLink
  }
  console.log(books)



  return {
    props: {
      data: global.QSON.stringify({
        session,
        books
        // nlangs,
      })
    },
  }
}