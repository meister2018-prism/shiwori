import React from 'react';
import { StyleSheet, Text, View, Button,FlatList ,TouchableOpacity} from 'react-native';
import HeaderIcon from '../../components/HeaderIcon';
import { connect } from 'react-redux';
import { device_get } from '../../api/showori_server/device';
var moment = require("moment");
/**
 * 読書記録画面の編集(リスト表示)  
 * editScreen.js >> here
 * here >> editDetailScreen
 */
class EditScreen_Child extends React.Component {
	state = {	get_data : null,
				fetch_finish : false
			}
	// 読書記録編集画面の詳細へ飛ぶ
	_goEditDetail(item){
		this.props.navigation.navigate('EditDetail',{item:item})
	}

	_createItem(item){
		// itemの中に入ってる情報はほかにも
		let date = moment(item.timestamp,"YYYY-MM-DD-hh-mm-ss");
		let ret = 	<View style={{}}>
							<TouchableOpacity
								onPress={()=>{this._goEditDetail(item)}}>
								<View style={styles.container}>
									<View style={styles.container2}>
										<Text style={styles.time}>{date.format("MM/DD hh時mm分ss秒")}</Text>
										<Text style={styles.readtime}>読書時間 {(item.readtime/60000).toFixed(1)}分</Text>
									</View>
									
									<Text style={styles.txt}>読書量　{item.page_num}ページ</Text>
									<Text style={styles.txt}>{item.readingspeed}</Text>
								</View>
							</TouchableOpacity>
					</View>
		return ret;
	}

	async _getReadingHistory(){
		let res = await device_get(this.props.user_id);
		if(res.status==200){
			this.setState({get_data:res.body});
		}else{
			alert('ネットワークエラー['+String(res.status)+']再度実行してください。')
		}
		this.setState({fetch_finish:true});
	}

	componentDidMount(){
		this._getReadingHistory();
	}
	render() {
		let screen;
		if(!this.state.fetch_finish){
			screen = <Text>読み込み中</Text>
		}else{
			if(this.state.get_data==null){
				screen = <Text>読書履歴はありません</Text>
			}else{
				// 読み込めてる
				screen = 	<View style={{width:'100%',}}>
								<FlatList
									data = {this.state.get_data.reverse()}
									renderItem = {({item})=>this._createItem(item)}
									keyExtractor={(item, index) => index.toString()}
								/>
							</View>
			}
		}
		
		return (
			<View style={{ width: '100%'}}>
				{/* <Text>読書中の本の情報を編集</Text> */}
				{screen}
			</View>
		);
	}
}

const mapStateToProps = state => ({
    // jsonから取って来たデータを代入 
    user_id : state.user.id,
})

const mapDispatchToProps = {
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditScreen_Child);

const styles = StyleSheet.create({
	container: {
		paddingVertical: 2,
		paddingHorizontal: 10,
		borderColor: '#7d7d7d',
		width: '100%',
		borderBottomWidth: 0.5,
		backgroundColor:'#fff'
	},
	container2:{
		flexDirection: 'row',
	},
  time:{
		color: '#3C914A',
		fontSize:15,
		padding: 2,
		fontWeight: 'bold',
	},
	readtime: {
		width: '49%',
		fontSize:16,
		padding: 2,
		textAlign: 'right',
	},
	txt:{
		width: '49%',
		fontSize:16,
		padding: 2,
	}
  });