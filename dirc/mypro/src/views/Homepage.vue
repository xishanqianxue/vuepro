<template>
  <div class="home">
    
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<template>
  <div id="app">
    <div class="Nav">
      <div class="login">登录</div>
      <span>|</span>
      <div class="register">注册</div>
      <div class="Person">个人中心</div>
    </div>
    <p class="text0"></p>
    <img src="../public/111.png" class="image1" />
    <p class="title1">好又高学生管理系统</p>
    <span class="text1">规范学生管理</span>
    <span class="text2">|</span>
    <span class="text3">提高办公效率</span>
    <div class="text4">立即体验</div>
    <div class="text5">我再逛逛</div>
    <div class="box2">
      <p class="text6">我们的核心功能</p>
      <div class="box1" v-for="(el, index999) in arr" :key="index999">
        <img :src="el.image" class="image3" />
      </div>
    </div>
    <div class="tit">
      <div class="title" v-for="(el1, index1) in arr" :key="index1">
        {{ el1.title }}
      </div>
    </div>
    <div class="tit1">
      <div class="title2" v-for="(el2, index2) in arr" :key="index2">
        {{ el2.title2 }}
      </div>
    </div>
    <div class="box3">
      <img src="../public/222.jpg" class="image2" />
      <span class="title4">产品亮点</span>
      <div class="box4">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAkCAYAAADl9UilAAAEUUlEQVRYhb2Ye4hUVRzHP7uaj5JJczWDqE1Ss1KT1Kgci6DHlqZmrQr9EZalBqmIZgqOQ1ihoJWEFa1Cf+wqKqb4yi2oRkwFK1RIUjIlS80HOz5AQ42ffA9cDnfu3Lk70xeGe+acc8/53nN+j+85VUPnt1BmtAO66nkGOBc1fC6TCq2vLhOnR4FPgF+Bi8BfwB9AHjgBrAcmADfFHbC1xB4GdgLbgSnAPUAbr0934HmgAfgTeFurGYm2CQnZ5As0icNZYAPwo1brEtAN6Ac8BTwEdAY+AMYCLwK/F5ogCbEbgJXAC/p/CpgHLBcZH6vV3l+k6oCBwC7gCWBf2CRJtnJZgNS3QF/VhZEKYi/wLDAR+BeoAbals/k7ykHsZeBVlTdrolMljvGFPuwK0AN4rbXEOgGLVf4NqAcul0jKYaPszLa5MaxDKTY2WcZseB24kJCUw1r7lSOOmW0YvgO+byWpoohL7G6gl8rLK02KEogNDpSbE871iMzhvjid49rYXXpaED2egNRMYKHKV+WV66NeiFoxC6Rp4BVgmOryCUgZ5npzzi72QhgxC3wfKvn+AKwAnk5IqAvwEXCzV/8gkAE6xiX2nGLUVA2KonSLtrEpgoRJnQFK0JZLJwEHgbdC+tpuzAcOpLN5i2eks/madDY/JJ3NX1cgQT02Glgjsue0ak2SMsVgkuZTTejkTn+98zcwBzgE3A/sBkYCs4AO6rNHyb6dFqDOEasF9ksv/QyMAo7GIGRor7TUyau33LkEeK+AWLwTWAS8FNLW7LxygUgdlT39E5MU+kqf1F7tQEFZAxxRWnvckrlW26FLtYTcOFVMLZEUWo1tXt07AVJtlPitz08yj6GuYy6Tskzypfd+oxEbLrs6Viy2RGCMbMuR2hwg9ZUUxZPSYePk7W8ExpsskWnYkMuklhih3qqw/HctIbHz8ly8APymPvySHGC4SFYBS13gzmVS5vmH9Y4Z//WV6qGKUrcwDsarj4WG94FNEgPNsqkxhcaoDsiXWypA7FY9ffns/t8WRcx1SleA2CE9RwXqblQgD7aHEtuqcq1OM+XEMo1l8vlrKWDzzD6ypVVRxMybvtH/pSF5LQ6GBRRIvVbFsA54V2X76Oki1SKFYSd1S0f9dPY0DE5n891crpyhnNhberymBFJVik1OI9d56sGOboN0dGuQBOolJezQGPiwe00iBXOlecvnKp9UKlkplREFc5rTXrulqGmaMCoEddShOePV/+JfqkyQXbgj/DURO+lNYOXPlLhRng1TprtEcGdIW71yZdi5cnHYbU9f5c4RRRTuHm2RoafiVK1ST3cZvDMVW7kDAXVhYz+mtosi2FOZwQ7Rc6KuoWyLnpHddfbarsijdkcQfwD4uEgYMtucmcukjvkNlbgf8zE+5FB7Wl64o9L3Y1FokkAIYod+BfF/EDOYx7utsbhpISMSSe/HSsUW5cXbpdPMRgsD+A95CP1fzfWUFwAAAABJRU5ErkJggg=="
        class="image4"
      />
     
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAFf0lEQVRYhbWYfZBWUxzHP7utJczNjCJDq5c1k9WrYSSeSRLGWwgRZpMwTEwNslFuTyhMjBgzMYYiMfJSyCTpxY2tZmjtDCrGSEzGbKOetim0+5hfvnfnON1n9+6L7z/77Dnn3vs753x/39/3nKJzZ+ymnSgHpgE3ADuAJ4FXgH1pXhuFQWJ7cTtiGgi8CWwBKoFS4GTgeeBH4AHg6La+vC2BDQE+AGqAMc47Gp0x3YHHgV+ALND1/wxsJLAGqAYuc9r3Ak8BJwEXAKudvi7Aw8BPwNPACR0VWBFwJbARWAEMc/r+0GrY9t0nfn0KnA+cDbzvjD0KmAxsA+aJl20KrAS4CfgGeA840+n7DZgClAEzgJ0Jz68HRgEDxMMGtR8G3AFsBl4HTiu4Il5WHg7cAtwP9PbG2nY8ASxIm3EOyjWZcQrOxVJgdhQGG5IC6wzcpS3p7j34nYi8CDjQyoB8nKhJT9D2ujAaZKMwiHC20rRnjhfUl8DVQD/g1Q4IyvArMAnoCTwKuNs1wpIrk80NcgMb5r3AVugM8auRjkcdMB2oEI9jFCtxmgL73Pt0lWThUmVmR+MYBVbrJUCjFKApsHuBqZpJDBPSD4FNwPXtrBIxYuHdDswEjnX6jFsjozAwCh2SlZYEtykJengv/UEvfQ34q5UBlalEjQeO8Po+Nr5FYbDObSxUxEulY7alp3h926X0L6aQjVMV0I3Sxhh54G3JxKakBwttj63Iy0BfuYYap89W8hkFOFV88TEYWCxiVzpB/S0dNNJfJ5okoiXeNEq5T1cifOH0GT9mSXhnq1BngOXAV8A1TuLsl+sol8hubuG7qQltS/8RcA4wXLyI0UVbbqXqM+Aip28P/1YL062JwM8aX6FtLmiLLLDjpfoDUgZpDuNiR+fyau/kjNkpOShT0L+LEtUq/rbF3wK7Mtncqkw2d4n/ESP/Sqku8lmzVITTokIfH6sArIq8BNTreePgG5pMc1hoihCFwf44MLMnl3sPrFbJWNWKAEsTZMTaVop7Mcz6bFBCDPXK4DvAtVEY5IuVyuardjkDhquo2spdkVL9k7RtihOUGcqbgV5yvqOV4ZOUrajNkuMgx/bIV/VwSBzjLNmSr9ug/p3lJGJcpe3KO20HojCYC9zutE3H+1C9Mqi3Mmi709dfPNkK3Kotagm26vERyOjySaHxURjMl8QYemWyuYFJK7BPmtNHpnGL09dHxLbydI9WpRD6Ou3LUkzEHdO3ua2xfZ+vrBuToP5zReQqaZMP1wimObzmnN9HpuGMqf9bjvpXO33dpPrb9HeJDOZgHU5iFPT2Diqc3zuK9dBzOjw0l32x+g8Vf1Y4fbH6j9IEjAJrnf7xCVa6CZls7jiTCf1vO1Vtgb0gsi8RAQ9R4QSsUemJs9ZFnerr9/JYyOsvSEqaTDYXyGnE5WlxFAa7i72COkgkXK/zYUvYqHNnf2X0JOlUXOwnO/o2WhMfp8Top1JY42idcfEhpPydJHzTlHUu1qp9XYogC2GsVqskxdiFURhYLAd1rEHZZ7O409OvYdqO5d6htzVYpKuDFq2OmdNMNmfFPtHBlirAqoQz5lJViRr/oRQoUYAXSm4a5eWW6S4krhJ/Auc1dz9m4nm36p17aMhLPmbKujQH496Dci9z5Dz+A7sfy2RzRqd3VZeJs7IQ9ulFPXVjE8+gSIJbKwokXZAMURmqVY3t5tVDP7gGmYm4LG1NI7BWQx9RgI/JJSBjWCnuzJMpHCGrVO1Zqb0S4IKIwqBeDtm4PKEtV51ddfKZ6B3F8gkCbVbqWQl4HQnoyKtO+0B8G2QfjL2UG5RZJwveSB4WCqo5tOd0bbXQHIZxzByHCallmYmmBW38jO116wD8A1e4ZTa+VYAuAAAAAElFTkSuQmCC"
        class="image5"
      />
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAkCAYAAAAOwvOmAAADx0lEQVRYhbWYf2iVZRTHPzMXDuSuFk505q9q/SLW/lBQt2EZ/RFoVP7jJjTCmNAfRZNMhtxtfyih6EAQZvVPoCQREYb2Q0q9mDBj1srpNvtvOiyQug01fzA54/vA4bp77/uO9x64vM/zvOd53s97nnPOc95b1tD5LzFlFtAEPAtUAv8AF4GfgP/jLpZJp+4bmxljfhXwAfAOMHuK++PAp0A3cC0unJcZEfWWAX8AW/MAofF3pbes1FDPA8eBeeoPAm1ALfCwrm0aR3rHNa8kUOY/XwBh43cBdcABYET+NKJ+ne4jfZv3YCmgzAKPq90rn7qTR/eO7veqb/PeKgVUq65/A1sirrlF+iabk4aqdn7xuaIrioxLH21pdZJQS1y7L+a6Xn9JAb0ppRBUhWvfiLmu168ooBcb6i/XfjTmul7/asy5BaGGgXAGrY25btDPApeShLIQP6L2izrvokiT9E2+AW4nCWWyE5hQ2yJqcRH9xS7yJlwyTRTKjo7das9TVG0AynL0yjTe544je6FfpwMVpUrYBtQAzcAc4JBATyhJ2thqYL6b8xmwfTpAJlHrqceAH4GFEXTHgHXAL0X07EWfULIdyKRTt8KNYttn5UiPirgoQGj7zupArpnivoH8AIyqMDTdscaubHtjV3bSLQpt33PAV7JSkPPAYeAUMATcBMqBpcBK4A1glXTXKwpt27/T2JPAaeCRnGdVySXsJd7Pt31NSgehZLmgg/ZoBEvV6wEhLbwNfKK21Vlr1P5SL2i+2CHfNFk1laXqc4CsFHlPVoki54CXVIVWOqAFOUBmyckavbEra0HTL3dqzfWph7RlAahD5UdUoCAT8sUuN+bd4LBXzqRTv8lvTWpzofYBi1x7R0yYQuIPaZ8+zFLlbvv+81ANwEa1LSLaEwRCiTR85XSo1gpAex3UCe9T3bqa6TdN58wqIhWqPKoE0K8tm+OArgAfBygL/xfUtv0eSBjIHP574Ck3Zrv0jOtb3nolk05lA1SLu7mnREDL1bfzsRN4Xc5v5c3PFuWZdGoyPwWoV3Udlj+VEuhl1WnHyPPZbiac68waJTlOFwj5VdFvwRkhCiRnSgQU8pz57kkl0oJQS11/qARAfXpGOP+edlk+L9Rc17+cMNCf8qFQzhzR2KZiUGU5/aSAUHQ1q2310muqJkaLQXnrXFXyjPrrcXNbHNCgS777nWXu5ny65YU6CPweyRaFxR7+kXzIrGHbZeed/V/1dZyFLE9dB1YAb8rcD8SYb5Hk5UOFvcF8K3+y4Al/eBQX4B7PCt5jfenfxgAAAABJRU5ErkJggg=="
        class="image6"
      />
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAkCAYAAAAHKVPcAAABR0lEQVRYhe2YzyuEQRiAH6yDtpyUK9r8CEdFKP+Awx78DQ7UHpSD1K6DOLq4cHVAyv+wTk6uiiO1cUKSpPTWvDXJfM3hnWztPPXV+zW/nu+dmZr5uhYaL0QyA5RjK0dwBzxe1fspRTbYAnYNBYRvYBvY745sMGosIPQAe4s7r1OxmRDjT2DQSGAcGHPxfKzEA7BqJCA0gLqL+2KnIymaCZGpAtMJBnsGToDgNlSJU2Al4dduALPA01+FkoG5xALCMLAeKix5q1RoApeGg1eANRdPFEn43AAHhhJLnkRvqFJb7I4soWQJJUsoWULJEkqWUDpa4s2LW7GnbWuO3PXhHbj4LwnJxKYEcg3MC1PJEooszC/vfRkYMux/wIs/iiSu3b8CuaqPuCcFzVCfMh33QO1XRqw5A46LMiEcAufAZAKBFnAbLAV+AHDmLTrA3zfJAAAAAElFTkSuQmCC"
        class="image7"
      />
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAFWUlEQVRYhbWYa4ycYxTHf9ut0glTykYa/YAWwaogLr0M27qUjRbputQucSkRqpJVunGbLh/QiFKJNj64NC2ipVSxtN0tY8u6NdJGkW6CaFy2WobsitKVk/yf5uyz7zuz1TjJZN7zzHmf5/+ey/+cdyomzP2NMjIIOAWoBD4CdpW7YU+kkM/2sR5U5t5hwDoB+QD4EBj+H8+uAK7Wfp3Am8A5sVEpQAbmHSDn1k4F3gL230Mw5t3n9DkLOBK4AFiday7eMRBAAcxp0s1DHbq2tZXAkAGCMbtlwFXSu+XpXunzcs3FplKAksCcB0wGNmltog6pLAMmA7wGXCJ9q/JxrNZ2av3BXHPxWruIkzoNTDA6FGgHRklforzopb/YXq8CNfqlUw/V6SynAsuBfXTGCO+hcmBMfgLO1pOaNAALEsAM1141bq0hAoNCP9edf5IH9EwZMEG+VXVskz4TeMD9XgW86/YKYt4cmbDfYK8Mct8X6fqLEmCCfAmcDxSl3wPcrgONHqrdg7XpepRK3oOapnvReRsCICO7H3R9FHBGBMA2eRt4QfE2+RSYAvRIfwT4zOVXm8J7YQKow1R1L7n9ZhXy2R4fsrv0bQYrgPEOzDp57QrgOHfPe8Clrlqq9L1KQP5QmcegrOwXuwjdXMhnTe9T9rYQ+GComPRMgQlPbUm4MfKeJfrvTl+mUHS7tRhUCJtFpqGQzy4MhjEPPQw8pGtrMq0OzOvyhu9l5sW1rp0YE08H/qK/GKiP3ap5ta6Qzy71lknEaKFbpOtAfFaBddFBlh+rBdzkScDI7Z+EPa2PPQbcKb1HHLQiNkwC1KtStgQOkhNPBJmqnjZUunn2lhSCtId6CrhNulVmLdCSYJvay+wpr1FymowG1ghUvWNX5NGmlH2GKDdnSN+u4liXYt+XlCKx8Fyu5LYOPUa8Mto9yCzgiRJglosaTLoU5rgo+ki5eahbhPmJ9KN1jyX29SXAZBSSKW7NeO67MueVBYQYtNXpOxW2p1Pshym8E6WHvBojb2f2BpBVx7yoOqzaXkyxrxL4sdJtXDneeXgc8EqpWaoUIANjpRwmukBuK1PsRwrMydINxCRgs6pqs9ZtBFmaNkulAapUd75JelGbt6bYH67KCU21XRNBl/QuVdc30utEBRUDARSq40rp29RCOhJsUTN+3zH62pRp4XvgXOBH6depIZcElFFILpa+VWA+TwFzArBe3Ru1l1qF1xrx18BsZ79FYH+V3phrLt6bBiijKpgs3aa7Ghf7WE5Xtz/ErT8r/qpXnpj3boju26hZKjTf+3PNxVuTAM0XAQaxDp42pE3SiHpgtP68psfFjq/yCfd3qP2EsWVBrrloTXn3kH+AEm9f4G/H4Jt0eJfbrFY5FvrYfCXr49Ghu/QCsJR0sdR4WeB3AAcHD40XGJM5bm6pVmWFwWua3iQCGPNGowb9+6Jj55QBg3Juva4Psk8ANMEZtUTDVAA1Mxo5myIQBu5Rpzeq76VJpUIbzt5QyGe3x4B2KInjCa9afWv3yKmRI5bZrqWM0Bye9KYRwARqsWq+DB0wxL2ytLveY6BmuNcdlBc2nC8kWezeG5Vj6B2+xYU8DUxNIZ/dEgCNcTmxXn8ozBX1d7qy3qkRdkmJMKBZql7eQb3sDTXdkmBQlVm4CtL/BPZLOORnHbKmDBgvGY2447TWJpaengYGlbcNXV8Bx0RgfhFRrlI19PQ7srR0iyLsLfZEN47sBiPm7iODxaxmfDdwhGW7XGzktbf/lhnJWf8yUMdqzYY0mxz7gQkeMrFpzsr6/xAjVfsLxv6gsvPM6/YC2V+AfwFCJV/CyN7JcAAAAABJRU5ErkJggg=="
        class="image8"
      />
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAiCAYAAAA+stv/AAABt0lEQVRYhc3XMWgUQRTG8V/iYVCLFDaCiIWNgqY0CmKjYGVpoQFjJWhjEOxTSBoliiCCtShimlQS0MpGtIkgEbQUK1GICQGDXOTJ7HEcl4ub7M7lD8sOszvzfTvz5s3swKnJxd14iEvYKQ+/8RzXGniAK5mEC4ZwGauN9OXBN7zKZOAs9mMsDOxKlTOYyGTgPm6E9mAmwXXpu4HGBs/P4MAWNb7i9WYMnKgwKE/ibbcHvaZgGc0KxJupr670GoGPOJyWy1aI5f1lMwakhus2roJtvwqO4VCJ/j5joSoDI5jHQIn+IuCO4tP/Nug1BUMlxYv+Su2ovUbgPU6XnIII2A9VGQjepKs2ttVmtCOjbksrpuAH9uIqzmcysC/df4aBe7idovdgJgMF02FgCou4iD2ZhFfwBI/iVJxJszsxAqM414cVEVlzLgzMYTizeMHNwT6KB8PtmfAp7mQSvlX8j7Qb+J52v6oZx3W8wN02LZ0G6iByy+N0P45n6YjWou7I/xPZLpXjYLrU+ULdI9BM/xYX8BK/Ol+IRLSWynGKeVezoYKYjiNRbh+BqPhXmZOIgdncoi2Y/QvVLEZ1sMm7zAAAAABJRU5ErkJggg=="
        class="image9"
      />
      </div>
      <div class="box5">
      <p class="text8">统一管理平台</p>
      <p class="text9">文件快速调阅</p>
       <p class="text10">成员权限管控</p>
      <p class="text11">数据无忧备份</p>
       <p class="text12">智能模块定制</p>
      <p class="text13">提供本地部署</p>
      </div>
    </div>
     <div class="block">
    <span class="demonstration"></span>
    <el-carousel height="500px" :interval="2000" class="image66">
      <el-carousel-item  v-for="item in ko" :key="item.id">
        <img :src="item.src"/>
      </el-carousel-item>
    </el-carousel>
  </div>
 <span class="sentence">弹指间 搭建一站式管理平台</span>
 <span class="sentence1">"好又高"十分轻简易用，只需要一台电脑，你就可以在云端完成学生的日常管理</span>
 <span class="L1">||</span>
 <span class="L2">||</span>
 <span class="L3">||</span>
 <span class="V">V</span>
 <span class="sentence2">一站式管理平台</span>
 <span class="sentence3">教务系统OA管理二合一一</span>
 <span class="L4">||</span>
 <span class="L5">||</span>
 <span class="L6">||</span>
 <span class="V1">V</span>

 <span class="sentence4">多校区、角色管理</span>
 <span class="sentence5">按需自由管理角色权限功能，多校区，跨部门，分权限查看和管理数据，让工作更高效</span>
   
 <img  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftm-image.qichacha.com%2F46c1d417e5e2c4a184840884763b706f.jpg&refer=http%3A%2F%2Ftm-image.qichacha.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611222676&t=e5dbd06d239c59e75bbaf5d4993e9bc9" class="tubiao">
 <p class="gongsi">©2020 四川好又高科技有限公司</p>
 <p class="haoma">川ICP备13547674536号-2L</p>
 <span class="bottomnav"><p class="us">关于我们</p>
 <p class="more">更多</p>
 <p class="contect">联系我们</p></span>
 <p class="us1">了解我们</p>
 <p class="us2">加入我们</p>
 <p class="us3">联系我们</p> 
 <p class="fuwu">服务条款</p>
 <p class="yinsi">隐私声明</p>
 <p class="phone">+87 4108-789-135</p>
 <p class="email">943563944@qq.com</p>
 <img  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftm-image.qichacha.com%2F46c1d417e5e2c4a184840884763b706f.jpg&refer=http%3A%2F%2Ftm-image.qichacha.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611222676&t=e5dbd06d239c59e75bbaf5d4993e9bc9" class="tubiao2">


  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAdCAYAAAA+YOU3AAAD7ElEQVRYhbVYzYtOURj/zetFZkiY1GhmpEljGh/5iiasSFKk7CgTScnChoWtRg0L/gahWJAUhigrCwtCsZEN+RpmMfJi5p6f7j333vN97513curtnvuc+/F7fs/ze85z35auXxGmM0gChPZjcoBQdpLbQQyAXAmig4ITIN6BfEaBu58653yYCoSmQTMFKBGmYHPw0k7B4yBOgOxLwQNCu1Y6FlHwFoihz8vaXvwf0NnLoQA6YMktIC5AcLM8T9eEDVyby+MZCJz/0juvEFR10AkeGmlgAFIOnAYxHLPogE3ZVSxrc+XQG5BrvvbPnwhBqVVlNmcleYFkhukc6ZwCWyE4zIhqzTdPj/F1ydy09zHivaaZ9oisncQ+kCtAzAUxQXIUxE2QDRDPKdiWsy6KmdaJMNiX910eXbfwUGXQZsgl3SQugTwKotUAoUQnQNQskUkGfWkhPI6la1qq7Pq+adF9G1/dCxaGyHpBXAW53q4AeU5LYDW5RjiVwmZc+G25k8p2CoADWjLtqQgpoH6Qr40qoZesMpE5wDInTIC6zUgfaesc27b4ow66louMXpFd10SmBJRdVyYyYYksEob45LWmjfp18v49NtO1gopwgIL9XoAaKP1lGTDXZjnhWxeWM2q+0c1pPdRp+FPmz2oig1MRpi2ykvRROJY7oA0Q6sa4V1gW2Hb9TmjAvCLTgPmE5+S6ImPSkx5USR/hIATfUuBheu7msxVmX/i96+HwO8+1NLJ03p0P3Ub1WDL6J/PqJImLwdBnIQ3V4AJb+YbiSR/zvj8g1o7v63ojQX/9HTO5A+QDF2RBSEO5HLDpwMpKYaBv+RT3JD/3L/1WZ8RWECNVROZsGD7hFeR1GGz23gAGed5B4hGA1fV41yHRUsxiEyIr2lB8zw+I3qpuq9quvd9ZZ4Tdgd62bIstttnAtJCHGPeC13qgNE0O1pNPn3BvG2YpvO1W385tpu18NsFmtu46Ik5WZilgK02fYDUyAen5bILVIgGImOkZFXrbsMiqVoRikcHZ5HSwZrsc1RGJ2RV7W6+tXGQhsG63qM6Rfd+ZqSLHj7jkjVBgw1SF562rgRrvY9fMW9/HsdXbq3Gjpf3l2CwQ4xScVaG3bV5kxRXBsimmrfGqMdizuoaIfxnxSMXe1t872L100VyoVMujlkc0c8ILOB57ZZcXJd5fgWA3yKGmRFZQEUpFluELA41H3OkNNAZ73ssvl4SVhM1zjHgMET86XZuPTfvLxJhnKQXVtenMZlt2njqFgG8D6GsM9jzLu7wFT7/ZIpsJ8jBF8jfBbArWk39pmtt2pyqybPyNqwSAJ43BnsfGCoB/Vva1/AE8wfAAAAAASUVORK5CYII=",
          title: "数据储存",
          title2: "快速高效,同步平台",
        },
        {
          image:
            "data:image/png;base64,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",
          title: "规范管理",
          title2: "分类管理,合理存放",
        },

        {
          image:
            "data:image/png;base64,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",
          title: "团队协同",
          title2: "消息发布,实时更新",
        },

        {
          image:
            "data:image/png;base64,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",
          title: "快速检索",
          title2: "多种机制,高效筛选",
        },

        {
          image:
            "data:image/png;base64,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",
          title: "权限管理",
          title2: "角色分权,资源审批",
        },
        {
          image:
            "data:image/png;base64,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",
          title: "预览方便",
          title2: "支持多种格式文件",
        },
      ],
      ko:[
      {id:1,src: "https://ldpage.cloudpivot.authine.com/Public/Home/default/glxt/image/db.png"},
      {id:2,src: "https://ldpage.cloudpivot.authine.com/Public/Home/default/glxt/image/js2.png"},
      {id:3,src: "https://ldpage.cloudpivot.authine.com/Public/Home/default/glxt/image/js1.png"},
      ]
    }
  },
  components: {},
};
</script>

<style>
#app {
}

.Nav {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 40px;
    /* transition: all .2s;
    background: hsla(0,0%,100%,.9); */
  line-height: 40px;
}
.login {
  margin-right: 1px;
}
.register {
  margin-right: 40px;
}
.Person {
  margin-right: 16px;
}
.login:hover {
  cursor: pointer;
  color: red;
}
.register:hover {
  cursor: pointer;
  color: red;
}
.Person:hover {
  cursor: pointer;
  color: red;
}
.image1 {
  height: 600px;
  width: 100%;
  display: block;
}
.text0 {
  position: relative;
}
.title1 {
  position: absolute;
  font-size: 46px;
  color: aliceblue;
  top: 325px;
  left: 110px;
}
.text1 {
  position: absolute;
  color: aliceblue;
  top: 442px;
  left: 110px;
  font-size: 30px;
}
.text2 {
  position: absolute;
  color: aliceblue;
  top: 442px;
  left: 313px;
  font-size: 30px;
}
.text3 {
  position: absolute;
  color: aliceblue;
  top: 442px;
  left: 344px;
  font-size: 30px;
}
.text4 {
  position: absolute;
  width: 142px;
  height: 64px;
  background: grey;
  top: 534px;
  left: 129px;
  font-size: 30px;
  text-align: center;
  line-height: 64px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px 0 #2524244d;
  transform: translateY(-2px);
}
.text4:hover {
  color: red;
}
.text5 {
  position: absolute;
  width: 142px;
  height: 64px;
  background: grey;
  top: 534px;
  left: 365px;
  font-size: 30px;
  text-align: center;
  line-height: 64px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  color: white;
  cursor: pointer;
  box-shadow: 0 8px 20px 0 #2524244d;
  transform: translateY(-2px);
  transition: all 0.3s ease;
}
.text5:hover {
  color: red;
}
.image2 {
  height: 500px;
  width: 100%;
  display: block;
}

.text6 {
  position: absolute;
  font-size: 30px;
  left: 647px;
  top: 640px;
  color: #64798e;
  transition: all 0.3s ease;
}
.text6:hover {
  color: red;
}
.box2 {
  display: flex;
  width: 100%;
}

.box1 {
  display: flex;
  width: 100%;

  justify-content: space-around;
}

.image3 {
  display: flex;
  margin-top: 52px;
}
.title {
  display: flex;
  padding-left: 1px;
  margin-top: 20px;
  color: #64798e;
  cursor: pointer;
  font-size: 18px;
}
.tit {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.tit1 {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.title2 {
  display: flex;
  margin-top: 20px;
  margin-left: 1px;
  color: #64798e;
  cursor: pointer;
  font-size: 18px;
}
.image3:hover {
  background: rgb(36, 152, 230);
  cursor: pointer;
}
.title4 {
  position: absolute;
  top: 832px;
 left: 698px;
  width:500px;
  font-size: 30px;
  color: white;
}
.title4:hover{
  color: blueviolet;
}


.image4{
   position: absolute;
   top: 932px;
   left: 159px;
  background: white;
  height: 38px;
   width: 42px;

}
.image5{
   position: absolute;
  top: 932px;
  left: 362px;
    background: white;
  height: 38px;
 width: 42px;

}
.image6{
   position: absolute;
 top: 932px;
 left: 613px;
background: white;
   width: 42px;
  height: 38px;
}
.image7{
   position: absolute;
 top: 932px;
  left: 868px;
  height: 38px;
 background: white;
   width: 42px;
  
}
.image8{
   position: absolute;
 top: 932px;
      left: 1121px;
 background: white;
   width: 42px;
 height: 38px;
 
}
.image9{
   position: absolute;
  top: 932px;
  left: 1326px;
  background: white;
  height: 38px;
  
  width: 42px;
}
.text8{
   position: absolute;
  top: 994px;
    left: 125px;
  color: white;
  font-size: 18px;
}
.text9{
  position: absolute;
top: 994px;
 left: 329px;
    color: white;
  font-size: 18px;
}
.text10{
    position: absolute;
 top: 994px;
 left: 580px;
 color: white;
  font-size: 18px;

}
.text11{
 position: absolute;
 top: 994px;
  left: 835px;
   color: white;
  font-size: 18px;
}
.text12{
  position: absolute;
 top: 994px;
     left: 1088px;
 color: white;
  font-size: 18px;
}
.text13{
   position: absolute;
 top: 994px;
  left:1294px;
   color: white;
  font-size: 18px;

}
.text8, .text9,.text10, .text11, .text12, .text13 {
  cursor: pointer;
}
  .el-carousel__item {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    
    }
   

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
 .image66 {
  
   width: 700px;
  
 }
  .sentence {
    font-size: 28px;
    color: #545454;
    position: relative;
   bottom: 480px;
    right: -940px;
  }
 .sentence1{
   position:relative;
    bottom: 439px;
    right: -407px;
    font-size: 20px;
    color: grey;
   
 }
 .sentence2 {
    font-size: 28px;
    color: #545454;
    position: relative;
    bottom: 279px;
    right: 65px;}
.sentence3 {
     color:grey;
     position: relative;
    left: -267px;
    bottom: 250px;
     font-size: 20px;

  }
.sentence4{
   position:relative;
  bottom: 128px;
    right: -952px;
  font-size: 28px;
   color: #545454;
  }

.sentence5{

position:relative;
   bottom: 82px;
    right: -447px;
    font-size: 20px;
    color: grey;

}
.L1, .L2,.L3, .V {
  
  color: red;

}
.L1 {
   position: relative;
   bottom: 401px;
    right: -61px;}

  .L2 {
  position: relative;
   bottom: 369px;
    right: -53px;
  }  
 .L3 {
    position: relative;
  bottom:  337px;
    right: -45px;
 }

.V {
     position: relative;
  bottom: 322px;
    right: -36px;
}
.L4, .L5,.L6, .V1 {
  
  color: red;
}
 .L4 {
   
      position: relative;
 bottom: 244px;
    right: -1086px;
 }
 .L5 {

      position: relative;
    bottom: 214px;
    right: -1078px;
 }
.L6 {
    position: relative;
    bottom: 186px;
    right: -1070px;

}
.V1 {
     position: relative;
   bottom: 171px;
    right: -1061px;

}
.tubiao {
  display: flex;
   width: 300px;
   height: 300px;
   margin-top:-135px;
   margin-left: 107px;
}
.gongsi {
  font-size: 18px;
  color: grey;
  margin-top: -27px ;
  margin-left: 122px;
}
.haoma {
     font-size: 18px;
     color: grey;
    margin-top: 25px;
    margin-left: 124px;

}
 .us {
   font-size: 20px;
   position: absolute;
   top: 1889px;
    right: 811px;
   
 }
 .more {

    font-size: 20px;
   position: absolute;
  top: 1889px;
    right: 561px;
   
 }
.contect {

   font-size: 20px;
   position: absolute;
  top: 1889px;
    right: 268px;
   
}
.us1 {
  font-size: 18px;
   position: absolute;
  top: 1946px;
    right: 818px;
    color: grey;
}
.us1:hover {
   color: red;
   cursor: pointer;
}
.us2 {
   font-size: 18px;
   position: absolute;
  top: 1996px;
    right: 818px;
    color: grey;
}
.us2:hover {
  color: red;
   cursor: pointer;
}
.us3 {
 font-size: 18px;
   position: absolute;
  top: 2046px;
    right: 818px;
    color: grey;
}
.us3:hover {
  color: red;
   cursor: pointer;
}
.fuwu {
   font-size: 18px;
   position: absolute;
   top: 1946px;
    right: 546px;
    color: grey;
}
.fuwu:hover{
  color: red;
  cursor: pointer;
}
.yinsi {
   font-size: 18px;
   position: absolute;
   top: 1996px;
    right: 546px;
    color: grey;
}
.yinsi:hover {
 color: red;
  cursor: pointer;
}
.phone {
   position: absolute;
  top: 1946px;
    right: 230px;
    font-size: 18px;
    color: grey;
}
.phone:hover {
  color: red;
  cursor: pointer;
}
.email {
   position: absolute;
  top: 1996px;
    right: 216px;
    font-size: 18px;
    color: grey;
}
.email:hover {
  color: red;
  cursor: pointer;
}
.tubiao2 {
   width: 200px;
   height: 200px;
   position: absolute; 
    top: 87px;
    left: 216px;
}



















</style>


