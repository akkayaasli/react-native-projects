import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Picker } from 'react-native';
import { connect } from 'react-redux';
import { student_Change, studentCreate } from '../actions';
import {ButtonDesign, Spinner} from '../ortak';

class StudentCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  clickSave(){
    const { isim, Soyisim, ogrenciNumara, sube } = this.props;
    this.props.studentCreate({ isim, Soyisim, ogrenciNumara, sube });
  }

  renderButton(){
    if(!this.props.loading) {
      return <ButtonDesign onPress={this.clickSave.bind(this)}> KAYDET </ButtonDesign>;
    }
    return <Spinner size="small" />;
  }

  render() {
    return (
      <View style = {styles.loginView}>


          <View style = {{marginTop:'5%'}}>
            <Text style={{fontSize:15}}>Adı</Text>
            <View style={styles.textInputView}>

              <TextInput
                style={styles.textInputStyles}
             
                placeholder="Öğrenci Adı"
                placeholderTextColor='#CBCBCB'

                value={this.props.isim}
                onChangeText={isim => this.props.student_Change({ props: 'isim', value: isim })}
              />

              
            </View>
          </View>


          <View style = {{marginTop:'5%'}}>
            <Text style={{fontSize:15}}>Soyadı</Text>
            <View style={styles.textInputView}>
              <TextInput
                style={styles.textInputStyles}
                placeholder="Öğrenci Soyadı"
                placeholderTextColor='#CBCBCB'
                value={this.props.Soyisim}
                onChangeText={Soyisim => this.props.student_Change({ props: 'Soyisim', value: Soyisim })}
              />
            </View>
          </View>
          <View style = {{marginTop:'5%'}}>
            <Text style={{fontSize:15}}>Öğrenci Numarası</Text>
            <View style={styles.textInputView}>
              <TextInput
                style={styles.textInputStyles}
                placeholder="Öğrenci Numarası"
                placeholderTextColor='#CBCBCB'
                value={this.props.ogrenciNumara}
                onChangeText={ogrenciNumara => this.props.student_Change({ props: 'ogrenciNumara', value: ogrenciNumara })}
              />
            </View>
          </View>
          <View style = {{marginTop:'5%'}}>
            <Text style={{fontSize:15}}>Şube</Text>
            <View style = {{borderBottomWidth: 2, flexDirection: 'row', borderColor: '#ADADAD'}}>
              <Picker
                  style={{flex:1}} 
                  selectedValue={this.props.sube}
                  onValueChange={sube => this.props.student_Change({ props:'sube', value: sube })}>
                      <Picker.Item label="Şube Seçiniz" value="subeyok" />
                      <Picker.Item label="A şubesi" value="asube" />
                      <Picker.Item label="B şubesi" value="bsube" />
                      <Picker.Item label="C şubesi" value="csube" />
                      <Picker.Item label="D şubesi" value="dsube" />
                  </Picker>
            </View>
          </View>
          <View>
            {this.renderButton()}
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  loginView: { 
    width: '80%', 
    marginLeft: '10%'
  },
  imageStyle: {
    width: 20,
    height: 20,
  },
  textInputView:{
    flexDirection: 'row',
    borderBottomWidth:2,
    borderBottomColor: '#ADADAD'
  },
  imageStyleView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
    height: 50,
  },
  textInputStyles: {
    height: 50,
    width: '100%',
    fontSize: 15,
    padding: 10,
  },
  LinearGradientStyle: {
    height: 50,
    justifyContent: 'center',
    borderRadius:25,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color : '#fff',
  },
  textView: {
    marginTop:30, 
    alignItems:'center', 
    justifyContent:'center'
  },
  
  bottomView: {
    marginTop:150, 
    height:20,
    justifyContent:'center', 
    flexDirection:'row'
  },
  signUpView: {
    borderBottomColor:'#3CA9F6', 
    borderBottomWidth:2,
  },
});

const mapToStateProps = ({ studentListRespone }) => {
  const { isim, Soyisim, ogrenciNumara, sube, loading } = studentListRespone;
  return {
    isim,
    Soyisim,
    ogrenciNumara,
    sube,
    loading
  };
};

export default connect(mapToStateProps, { student_Change, studentCreate })(StudentCreate);