import React from 'react'
import { List,Grid } from 'antd-mobile';
import PropTypes from 'prop-types';

class AvatarSelector extends React.Component{
    state = {
        icon:'',
        text:''
    }
    render(){
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippo,koala,lemur,pig,tiger,whale,zebra'.split(',').map(v=> ({
            icon: require(`./icon/${v}.png`),
            text: v,
          }));
        const gridHeader = this.state.icon ?
                           (<div><span>已选择头像</span><img src={this.state.icon} /></div>) : '请选择头像' ;
                           
		return (
			<div>
				<List renderHeader={() => gridHeader} >
                     <Grid 
                        data={avatarList}
                        columnNum={5}
                        onClick={el=>{
                            this.setState(el)
                            this.props.selectAvatar(el.text)
                        }}
                         />
                </List>
			</div>
		)
	}
}
AvatarSelector.propTypes = {
    selectAvatar:PropTypes.func.isRequired
}
export default AvatarSelector
