import React from 'react';
import { StyleSheet, Text, View, Button,TextInput,FlatList } from 'react-native';
import { connect } from 'react-redux';
import {gbapi_search_specific} from '../../api/googleBooks/search';
import RecentlyViewedChild from './recentlyViewedList_child'

/**
 * navigationを送ってください
 * <RecentlyViewed navigation = {this.props.navigation} />
 */
class RecentlyViewed extends React.Component {
    state = {recentlyViewed:this.props.recentlyViewed,
             recently_img:[],
             recently_id:[],};
    async _init(){
        let img=[],id=[];
        for(let i=0;i<this.props.recentlyViewed.img.length;i++){
            img.push(this.props.recentlyViewed.img[i]);
            id.push(this.props.recentlyViewed.id[i])
            // error処理はここ
        }this.setState({recently_img:img,recently_id:id});
    }
    componentDidMount(){
        // this._init();
        this.interval = setInterval(() => this._init(), 1000);
    }
    render() {
        /*let data=[];
        for(let i=0;i<this.state.recently_data.length;i++){
            data.push(getBooksData_specific(this.state.recently_data[i]))
        } */       
        return (
        <View style={{ flex:1, alignItems: "center",marginTop:10 }}>
            <Text>最近読んだ本</Text>
            <RecentlyViewedChild 
                img={this.state.recently_img}
                id ={this.state.recently_id}
                navigation={this.props.navigation}
                />
        </View>
        );
    }
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 30,
    width:350,
    borderWidth: 1,
    borderColor: '#333'
  }
});


const mapStateToProps = state => ({
    recentlyViewed : state.search.recentlyViewed // [id,id,id,...] 先頭が古く、末尾が新しい
})

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentlyViewed)