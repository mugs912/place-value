import React, {Component} from 'react'
import BoxList from '../BoxList/BoxList'

export default class GenerateNumber extends Component{
  
    numWords = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
    tys = ['','','Twenty','Thirty','Fourty','Fifty','Sixty','Seventy','Eighty','Ninety']
    teens = ['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen']

    convertToWords() {
        let num = Math.floor(1000+(Math.random()*9000))
        let que = ''
        let counts = {}
        let i = 3
        let numList = Array(4)
        while(num !== 0)
        {
          numList[i] = num%10
          num = parseInt(num/10)
          i--
        }
        que = numList.map((item,index) => {
          counts[item] = counts[item] ? counts[item] + 1 : 1;
          if (index === 0)
            return  (que + this.numWords[item] + ' Thousand ')
          else if(index === 1 && item !== 0)
            return  (que + this.numWords[item] + ' Hundred ')
          else if (index === 2 && item !== 0)
          {
            if(item === 1)
              return (que + this.teens[numList[3]] + ' ')
            else
              return (que + this.tys[item] + ' ')
          }
          else if(item !== 0 && numList[2] !== 1)
            return (que + this.numWords[item])
          else return (que + '');
        })
        return ({'list':numList,'word':(que[0] + que[1] + que[2] + que[3]),'count':counts})
    }

    render(){
        var question = this.convertToWords()
        return(
          <div>
            <h1>{question.word}</h1>
            <BoxList list={question.list} count={question.count}/>
          </div>
        );
    }

}