import React from 'react'
import { SectionList, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../../android/app/src/theme/appTheme';
import { ItemSeparator } from '../components/ItemSeparator';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Superman", "Robin","Superman", "Robin","Superman", "Robin","Superman", "Robin","Superman", "Robin",]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman",  ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", ]
    }
];

export const CustomSectionList = () => {
    return (
        <View style={{...styles.globalMargin, flex: 1}}>
            <SectionList
                sections={casas}
                keyExtractor={(item, index) => item + index}
                ListHeaderComponent={() => <HeaderTitle title="Section List"/>}
                ListFooterComponent={() => <HeaderTitle title={"Total de Casas: " + casas.length}/>}
                renderItem={({item}) => <Text>{item}</Text>}
                stickySectionHeadersEnabled
                renderSectionHeader={({section}) => (
                    <View style={{backgroundColor: 'white'}}>
                        <HeaderTitle title={section.casa}/>
                    </View>
                )}
                renderSectionFooter={({section}) => (
                    <HeaderTitle title={"Total: " + section.data.length}/>
                )}
                // SectionSeparatorComponent={() => <ItemSeparator/>}
                ItemSeparatorComponent = {() => <ItemSeparator/>}
                showsVerticalScrollIndicator={false} // Quitar scroll
            >

            </SectionList>

            


        </View>
    )
}
