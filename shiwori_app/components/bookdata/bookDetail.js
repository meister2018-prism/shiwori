import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,Modal } from 'react-native';
var Dimensions = require('Dimensions');
var { width, height, scale } = Dimensions.get('window'); //get window size

class BookDetail extends React.Component{
    state = {modalVisible:false,modalVisible2:false}
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    setModalVisible2(visible) {
        this.setState({modalVisible2: visible});
    }
    render(){
        let data = this.props.data; //data:(obj)
        let image,modal_image;
        if(data.imageLink_large != null){
            image=<Image source={{uri: data.imageLink_large}} style={{width: 150, height: 250,resizeMode : 'contain'}} />
            modal_image=<Image source={{uri: data.imageLink_large}} style={{width: 300, height: 500,resizeMode : 'contain'}} />
        }else if(data.imageLink_medium !=null){
            image=<Image source={{uri: data.imageLink_medium}} style={{width: 150, height: 250,resizeMode : 'contain'}} />
            modal_image=<Image source={{uri: data.imageLink_medium}} style={{width: 300, height: 500,resizeMode : 'contain'}} />
        }else if(data.imageLink_thumbnail!=null){
            image=<Image source={{uri: data.imageLink_thumbnail}} style={{width: 150, height: 250,resizeMode : 'contain'}} />
            modal_image=<Image source={{uri: data.imageLink_thumbnail}} style={{width: 300, height: 500,resizeMode : 'contain'}} />
        }else if(data.imageLink_smallThumbnail!=null){
            image=<Image source={{uri: data.imageLink_smallThumbnail}} style={{width: 150, height: 250,resizeMode : 'contain'}} />
            modal_image=<Image source={{uri: data.imageLink_smallThumbnail}} style={{width: 300, height: 500,resizeMode : 'contain'}} />
        }else {
            image= <Image source={require('../../assets/img/noimage.png')} style={{width: 150, height: 250}} />
            modal_image=<Image source={{uri: data.imageLink_large}} style={{width: 300, height: 500,resizeMode : 'contain'}} />
        }
        return  (
                <View style={styles.container}>
                    <View style={styles.InfoContainer}>
                        <TouchableOpacity onPress={() => {this.setModalVisible2(true);}}>
                            <View style={styles.img}>{image}</View>
                        </TouchableOpacity>
                            <View style={styles.info}>
                                <Text style={styles.title}>{data.title}</Text>
                                <Text style={styles.author}>{data.authors}</Text>
                                <Text style={styles.publiserDate}>{data.publishedDate}</Text>
                                <Text style={styles.publisher}>{data.publisher}</Text>
                            </View>
                    </View>
                    <View style={styles.detailsContainer}>
                    <Text style={styles.bookdetail}>本の詳細</Text>
                    <TouchableOpacity　onPress={() => {this.setModalVisible(true);}}>
                        <Text numberOfLines={5} style={styles.bookdetail_txt}>{data.description}</Text>
                    </TouchableOpacity>
                    </View>
                    {/* Modal */}
                    <Modal
                        animationType="none"
                        transparent={true}
                        visible={this.state.modalVisible}>
                        {/* description */}
                        <View style={styles.modalScreen}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.bookdetail}>本の詳細（全文）</Text>
                            <Text style={styles.bookdetail_txt}>{data.description}</Text>
                            <TouchableOpacity 
                                onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
                                <Text style={styles.hidebutton_txt}>Close</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </Modal>
                    <Modal
                        animationType="none"
                        transparent={true}
                        visible={this.state.modalVisible2}>
                            <View style={styles.modalContainer}>
                                <View style={styles.modalImgContainer}>
                                    {modal_image}
                                    <TouchableOpacity 
                                        onPress={() => {this.setModalVisible2(!this.state.modalVisible2);}}>
                                        <Text style={styles.hidebutton_txt}>Close</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    </Modal>
                </View>
        );
    }
}

export default BookDetail;

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:width,
        height:height
    },
    InfoContainer:{
        flexDirection:'row',
        backgroundColor: '#f0f0f0',
    },
    img:{
        backgroundColor: 'powderblue',
        padding :5,
    },
    info:{
        flex:1,
        padding:10,
        flexWrap:'wrap',
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
    },
    author:{
        fontSize:13,
        color:'#666666',
    },
    publisher:{
    },
    publiserDate:{
    },
    detailsContainer:{
        backgroundColor: '#f0f0f0',
        padding:10,
        flex:1,
    },
    bookdetail:{
        fontSize:18,
        fontWeight:'bold',
        padding:5, 
    },
    bookdetail_txt:{
    },
    modalScreen:{
        flex:1,
        padding:20,
        backgroundColor: '#f0f0f0',
    },
    modalContainer:{
        flex:1,
        justifyContent:'center',
        padding:20,
        backgroundColor:'#dfdfdf'
    },
    modalImgContainer:{
        flex:1,
        justifyContent:'center',
        padding:20,
        backgroundColor:'#dfdfdf'
    },
    hidebutton_txt:{
        fontSize:15,
        textAlign:'right',
    }
  });