
import _ from 'lodash';
import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';//connect yapısı ile projeyi sarmalıyorum.

import {studentListData} from '../actions';


import ListItem from './ListItem';



class StudentList extends Component{

    componentDidMount(){
        this.props.studentListData();
        //this.createDataSource(this.props);

    };

    /*getDerivedStateFromProps(nextProps){//componentWillReceiveProps yerine bu kullanılıyor.
        this.createDataSource(nextProps);
    }*/

    /*createDataSource({studentsArray}){
        const ds=new FlatList.DataSource({
            rowHasChanged:(r1,r2)=>r1 !== r2
        });

        this.dataSource=ds.cloneWithRows(studentsArray);
    }*/

    renderRow({item,index}){
        return <ListItem ogrenci={item}/>;
    }

    render()
    {
        //console.log(this.props.studentsArray)
        return(            
                <FlatList
                    //enableEmptySections
                    //dataSource={this.dataSource}
                    //renderRow={this.renderRow}
                    data = {this.props.studentsArray}
                    renderItem = {this.renderRow}
                    keyExtractor = {(item, index) => index.toString()}
                />
                
            
        );
    }
}


const mapStateToProps=({studentDataResponse})=>{
    const studentsArray=_.map(studentDataResponse,(val,uid)=>{
        return {...val,uid};
    });

    return {studentsArray};
};

export default connect(mapStateToProps,{studentListData})(StudentList);