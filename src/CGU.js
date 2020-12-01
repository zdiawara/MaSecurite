import React, {Component} from 'react';
import {Alert, Button, Share, TextInput} from 'react-native';
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  ScrollView,
} from 'react-native';

export default class CGU extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../icon/background.png')}
                    style={styles.backgroundImage}>
                    <ScrollView vertical={true}>       
                                <View style={{flex:1, backgroundColor:'white',opacity:0.8}} >
                                        <Text>
                                            CONDITIONS GENERALES APPLICABLES à L’application « ma sécurité routière »
                                            version en vigueur au 20 décembre 2020
                                            Sommaire{'\n'}{'\n'}
                                            1. Contexte {'\n'}
                                            2. Présentation et objectif de l’application « ma sécurité routière »{'\n'}
                                            3. Critères d’éligibilité{'\n'}
                                            4. Inscription – Désinscription{'\n'}
                                            5. Conditions d’attribution des lots{'\n'}
                                            6. Fin de la participation à l’application « ma sécurité routière »{'\n'}
                                            7. Responsabilité{'\n'}
                                            8. Disponibilité{'\n'}
                                            9.  Liens vers des sites web tiers{'\n'}
                                            10. Suspension et fin de l’application « ma sécurité routière »{'\n'}
                                            11. Modifications{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}
                                        </Text>

                                        <Text>
                                            1. Contexte L’application « ma sécurité routière » est un projet destiné à 
                                            promouvoir et à améliorer la sécurité sur les routes en permettant aux 
                                            utilisateurs éligibles (ci-après « Utilisateur(s) » ou « vous ») d’installer 
                                            une application sur son téléphone portable ou sa tablette afin de connaitre 
                                            objectivement le respect des limitations de vitesses de leur véhicule, 
                                            renseigner l’utilisateur travers du guide du bon conducteur et recevoir des 
                                            conseils de conduite.
                                            La participation à l’application « ma sécurité routière » est conditionnée 
                                            à votre acceptation (i) des présentes conditions générales 
                                            (ci-après les « CG »).
                                            Votre acceptation des présentes Conditions Générales est effectuée de 
                                            manière expresse lors de votre inscription à l’application « ma sécurité 
                                            routière »{'\n'}{'\n'}{'\n'}{'\n'}
                                        </Text>

                                        <Text>
                                            2. Présentation et objectif de l’application « ma sécurité routière »
                                            l’application « ma sécurité routière » a pour objectif de contribuer à 
                                            une route plus sûre grâce à l’analyse des données de conduite.{'\n'}{'\n'}{'\n'}{'\n'}
                                        </Text>

                                        <Text>
                                            3. Critères d’éligibilité La participation à l’application « ma sécurité 
                                            routière » est réservée aux personnes majeures titulaires du permis de 
                                            conduire B, résidant en France métropolitaine et qui remplissent les 
                                            critères d’éligibilité.{'\n'}{'\n'}{'\n'}{'\n'}
                                        </Text>

                                        <Text>
                                            4.Votre participation à l’application « ma sécurité routière » vous donne 
                                            accès à un programme avantages organisé par la sécurité routière de la 
                                            Nièvre basé sur la collecte des pourcentages du respect des limitations de 
                                            vitesses. Votre pourcentage évolue notamment en fonction de la durée de votre 
                                            participation à l’application « ma sécurité routière ».
                                            vous pourrez si vous le souhaitez communiquer par email ou via l’Application votre 
                                            score.{'\n'}{'\n'}{'\n'}{'\n'}
                                        </Text>

                                        <Text>
                                            5. Tirage au sort – Un tirage au sort sera effectué tous les six mois.
                                            Des tirages au sort seront organisés par la sécurité routière de la Nièvre au bénéfice 
                                            des utilisateurs. Des cadeaux seront alors distribués aux meilleurs conducteurs.{'\n'}{'\n'}
                                            Les conditions de participation au tirage au sort seront a minima la suivante les données 
                                            aient été remontées au moins 100 km de trajet entre une semaine et deux mois avant la date 
                                            du tirage au sort. La sécurité routière informera les gagnants par courriel adressé à 
                                            l'adresse communiquée lors de l'envoi des données via l’application « ma sécurité routière » 
                                            dans un délai de 20 jours ouvrés à compter de la date de remise des lots. Les lots sont non modifiables, 
                                            non échangeables et non remboursables une fois attribués. En cas de renonciation expresse d'un utilisateur 
                                            à bénéficier de son lot ou en l'absence de retrait d'un lot dans les conditions définies 
                                            ci-avant, le lot ne sera pas attribué. Les lots ne peuvent faire l’objet d’une demande de contrepartie 
                                            financière, d’échange ou de reprise, pour quelque raison que ce soit. La sécurité routière 
                                            de la Nièvre se réserve la possibilité, si les circonstances l'exigent, de substituer, 
                                            à tout moment, au lot, un autre lot d'une valeur unitaire commerciale et de 
                                            caractéristiques équivalentes. La sécurité routière de la Nièvre s'engage à s'efforcer, 
                                            avec ses prestataires, d'assurer le bon déroulement de la remise des lots. Néanmoins, 
                                            si une défaillance technique survenait et affectait le bon déroulement du tirage au 
                                            sort dans des conditions indépendantes de la volonté de la sécurité routière, cette 
                                            dernière ne saurait être engagée à l'égard des participants. La sécurité routière de 
                                            la Nièvre ne saurait encourir une quelconque responsabilité si, en cas de force majeure 
                                            ou d’évènements indépendants de sa volonté ou si les circonstances l’exigent, elle 
                                            était amenée à annuler le tirage au sort, le reporter, le suspendre ou à en modifier 
                                            les conditions, sa responsabilité ne pouvant être engagée de ce fait. Si les 
                                            coordonnées d’un gagnant sont inexploitables ou si le gagnant ne peut être identifié 
                                            ni par son nom, ni son adresse, ni son numéro de téléphone, il n’appartient pas à la 
                                            sécurité routière de la Nièvre de faire des recherches complémentaires afin de 
                                            retrouver le gagnant indisponible, qui ne recevra ni son lot ni aucun dédommagement 
                                            ou indemnité.{'\n'}{'\n'}{'\n'}{'\n'}
                                        </Text>

                                        <Text>
                                            6. Fin de la participation à l’application « ma sécurité routière » Vous êtes libre à tout moment de quitter l’application « ma sécurité routière », dans les conditions décrites ci avant au chapitre Inscription/Désinscription. Utilisation l’application « ma sécurité routière » Sous réserve de votre acceptation des présentes Conditions Générales et de votre utilisation l’application « ma sécurité routière » et son contenu (en ce compris, sans limitation, tous fichiers, textes, dessins, images, illustrations, vidéos, logos, polices présents dans le Site) (ci-après le « Contenu ») en conformité avec les présentes, nous vous accordons un droit non-exclusif, incessible, gratuit et révocable d’accéder au Site et de l’utiliser uniquement conformément aux présentes CG, pour votre usage strictement personnel. l’application « ma sécurité routière » et son Contenu sont protégés par des droits de propriété intellectuelle, notamment par des droits d'auteur et marques, qui sont notre propriété exclusive et/ou celle de nos concédants de licence. Les présentes Conditions Générales ne peuvent pas être interprétées comme transférant la propriété l’application « ma sécurité routière » ou du Contenu aux Utilisateurs. Il est interdit à tout Utilisateur de copier ou reproduire tout ou partie du Contenu et l’application « ma sécurité routière », sauf pour son usage propre et sauf autorisation spécifique. Dans le cadre de votre utilisation l’application « ma sécurité routière », vous pouvez poster des commentaires ou tout autre contenu et soumettre des suggestions,
                                            des idées, des questions ou toute autre information tant que ce contenu n'est pas illégal, obscène, abusif, menaçant, diffamatoire, calomnieux, contrevenant aux droits de propriété intellectuelle, ou préjudiciable à des tiers ou répréhensible et ne consiste pas ou ne contient pas de virus informatiques, de militantisme politique, de sollicitations commerciales, de chaînes de CONDITIONS GENERALES APPLICABLES l’application « ma sécurité routière »Version du 20 décembre 2020. Vous ne devez pas utiliser une fausse adresse e-mail, usurper l'identité d'une personne ou d'une entité. Nous nous réservons le droit de retirer ou de modifier tout contenu. Si vous pensez qu'un contenu sur l’application « ma sécurité routière », un message diffamatoire, ou que vos droits de propriété intellectuelle ont été enfreints par un article ou une information sur l’application « ma sécurité routière », merci de contacter le gestionnaire de l’application. . Vous déclarez et garantissez être propriétaire ou avoir les droits nécessaires sur le Contenu Utilisateur que vous publiez ; que, à la date de publication dudit Contenu Utilisateur : (i) le Contenu Utilisateur est exact, (ii) l'utilisation du Contenu Utilisateur que vous avez fourni ne portera pas atteinte à toute personne physique ou morale (notamment que le Contenu Utilisateur n’est pas diffamatoire). Vous acceptez de nous indemniser en cas d'action d'un tiers à notre encontre pour un Contenu Utilisateur que vous avez fourni, sauf dans le cas où notre éventuelle responsabilité pourrait être recherchée pour ne pas avoir retiré un contenu dont le caractère illicite nous aurait été notifié, dès lors que cette action aurait pour cause, fondement ou origine le Contenu Utilisateur que vous nous avez communiqué.
                                            {'\n'}{'\n'}{'\n'}{'\n'}
                                        </Text>

                                        <Text>
                                            7. Responsabilité {'\n'}{'\n'}
                                            Toute utilisation et/ou exploitation de l’application « ma sécurité routière » et/ou non autorisée par les présentes CG, à quelque titre que ce soit pourra faire l'objet de toute action appropriée, notamment d'une résiliation de votre participation à l’application « ma sécurité routière », ou d'une procédure judiciaire, telle qu'une action en contrefaçon. 
                                            {'\n'}Notamment l’Utilisateur s’engage à ne pas : 
                                            {'\n'}{'\n'}
                                            -Utiliser l’application « ma sécurité routière » pour enregistrer ou transmettre un code malveillant ou pour collecter, envoyer ou stocker des éléments contrefaisants, obscènes, malveillants, menaçants, injurieux ou autrement illicites ; 
                                            {'\n'}{'\n'}
                                            -Modifier, altérer, ou supprimer les mentions de droit d’auteur, les marques, ou tout autre privilège de propriété intellectuelle figurant dans ou sur le Site, ou permettant de l'identifier ; 
                                            {'\n'}{'\n'}
                                            -Introduire dans l’application « ma sécurité routière » tout virus, robot, bot, système automatisé quelconque ou tout autre élément de code, destiné en tout ou partie à perturber ou endommager l’application « ma sécurité routière » et/ou altérer, endommager ou effacer un contenu quelconque, et/ou récupérer ou enregistrer des informations de l’application « ma sécurité routière ». 
                                            {'\n'}{'\n'}
                                            Vous serez tenu responsable de tout dommage subi par nous résultant de votre violation de ces CG. Vous acceptez de nous indemniser et de nous dégager de toute responsabilité, au même titre que nos CONDITIONS GENERALES APPLICABLES A LA BETTER DRIVING COMMUNITY Version du 30 avril 2019l’application « ma sécurité routière » Prudence au volant .
                                            Vous devez en toutes circonstances conduire de manière vigilante et dans le respect des règles du Code de la route. Il est strictement interdit d’utiliser le Site et le Matériel lors que le véhicule est en marche. Vous ne devez saisir les données que vous souhaitez entrer manuellement sur l’Application que lorsque votre véhicule est à l’arrêt, à un emplacement de stationnement autorisé. Ces données peuvent être toutefois saisies par un passager qui n’est pas le conducteur, sous réserve que cela n’interfère pas dans la conduite du conducteur. Nous ne serons en aucun cas responsables en cas d’accident.
                                            {'\n'}{'\n'}{'\n'}{'\n'}
                                        </Text>

                                        <Text>
                                            8. Disponibilité {'\n'}{'\n'}
                                            L’application « ma sécurité routière » est disponible « en l'état », sans aucune garantie. Nous nous efforçons de rendre l’application « ma sécurité routière » accessible à tout moment, mais nous ne pouvons pas garantir un service continu ou sans défaut. Nous ne garantissons pas que l’application « ma sécurité routière » ou son Contenu 
                                            {'\n'}{'\n'}
                                            (i) sera conforme à vos besoins, 
                                            {'\n'}{'\n'}
                                            (ii) dénué(e) d'erreurs ou d'omissions 
                                            {'\n'}{'\n'}
                                            (iii) toujours disponible et accessible de manière ininterrompue. 
                                            {'\n'}{'\n'}
                                            Nous nous réservons le droit de corriger toute erreur ou omission présente sur l’application « ma sécurité routière » à tout moment. Il est expressément rappelé que l’Internet n’est pas un réseau sécurisé. Nous ne saurions donc être tenus pour responsables de la contamination par d’éventuels virus ou de l’intrusion d’un tiers dans le système de votre terminal, et déclinons toute responsabilité quant aux conséquences résultant de votre accès au Site, et qui ne nous seraient pas imputables. Nous dégageons toute responsabilité en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques et/ou du matériel de réception empêchant l’accès l’application « ma sécurité routière ». Les frais de connexion ou d'accès qui vous sont facturés pour l’utilisation du réseau Internet permettant d’accéder au Site sont soumis aux conditions générales conclues avec votre fournisseur d’accès à Internet ou votre opérateur de réseau mobile. Vous avez conscience des risques inhérents à l'utilisation d'Internet, y compris, sans aucune limitation, les risques d’indisponibilité l’application « ma sécurité routière », de non-confidentialité ou de perte d'intégrité des données transmises, les attaques potentielles de virus, etc.
                                            {'\n'}{'\n'}{'\n'}{'\n'}
                                        </Text>

                                        <Text>
                                            9. Liens vers des sites web tiers :{'\n'}{'\n'}
                                            L’application « ma sécurité routière » peut contenir des liens hypertextes vers des sites web exploités par des tiers autres que nous. Ces liens hypertextes sont uniquement des références. 
                                            Nous ne sommes pas responsables de {'\n'}{'\n'}
                                            (i) la disponibilité ou le contenu d'autres services qui peuvent être liés à notre Site, 
                                            {'\n'}{'\n'}
                                            (ii) de la protection des données à caractère personnel ou d'autres pratiques de ces sites web. 
                                            {'\n'}{'\n'}
                                            Dans la mesure où nous n'avons aucun contrôle sur ces services, vous reconnaissez et acceptez que nous ne sommes pas responsables de la disponibilité de tels services externes et que nous n'endossons ni n'approuvons ni ne sommes responsables du contenu, de l'exactitude, de la qualité, de la publicité, des produits, des services ou autres éléments disponibles sur ces services ou disponibles via ces services. En outre, vous reconnaissez et acceptez que nous ne serons pas responsables, directement ou indirectement, de tout préjudice ou perte causé ou prétendument causé par ou lié à l'utilisation ou à la CONDITIONS GENERALES APPLICABLES  à l’application « ma sécurité routière » dépendance à l'égard de tout contenu, des biens ou services disponibles sur ou par le biais de ces services.
                                            {'\n'}{'\n'}{'\n'}{'\n'}
                                        </Text>
                                        
                                        <Text>
                                            10. Suspension et fin de l’application « ma sécurité routière »{'\n'}{'\n'}
                                            Sans préjudice de nos droits et recours, nous nous réservons le droit de suspendre temporairement ou définitivement votre accès à l’application « ma sécurité routière », à tout moment, sans préavis, dans le cas où vous violeriez l'une quelconque des dispositions des présentes CG et ce sans que notre responsabilité puisse être engagée à ce titre. Nous nous réservons également le droit de mettre fin à l’application « ma sécurité routière » à tout moment sous réserve de vous en informer au minimum deux (2) mois en avance et en précisant la date effective de fin de l’application « ma sécurité routière » dans ladite notification.
                                            {'\n'}{'\n'}{'\n'}{'\n'}
                                        </Text>

                                        <Text>
                                            11. Modifications: {'\n'}{'\n'}
                                            Nous pouvons modifier ou adapter les présentes CG à tout moment. Nous vous informerons de toute modification en plaçant un avis visible sur le Site ou par email. Vous serez réputés avoir accepté les CG modifiées si vous continuez à accéder et à utiliser le Site. Si vous n’êtes pas d’accord avec les modifications ou adaptations apportées aux CG, vous devez cesser d’utiliser le Site ou le Matériel. 13. Généralités Les CG constituent l'intégralité de l'accord entre vous et nous concernant l'objet des présentes et remplacent les termes de toute autre communication et/ou publicité concernant l’application « ma sécurité routière ». Si des dispositions des présentes CG sont jugées illégales, invalides ou inapplicables, en tout ou en partie, en raison des lois de tout état ou pays dans lequel ces dispositions sont destinées à être appliquées, elles seront considérées comme supprimées de ces CG, et les autres dispositions resteront en vigueur. Le non-respect par une partie de tout droit ou stipulation des CG ne constitue pas une renonciation à ce droit ou à cette stipulation. Responsabilité Toute utilisation et/ou exploitation illégale et/ou non autorisée par les CGU, du Matériel, à quelque titre que ce soit, pourra faire l'objet d’actions par nous, en ce inclus notamment mais non limitativement la résiliation des CGU sans préavis, une procédure judiciaire telle qu'une action en contrefaçon. Vous serez tenu responsable de tout dommage subi par nous résultant de la violation par vous des CGU. Vous serez tenu d'indemniser et de dégager de toute responsabilité DDI, ses dirigeants, employés, actionnaires, licenciés, et assureurs de toute perte, dépense, dommage et frais, y compris des honoraires d'avocat raisonnables, résultant de la violation par vous des CGU. Chaque Utilisateur est responsable d’informer tout conducteur tiers de son véhicule de sa participation à l’expérimentation, de la présence du boîtier, de la collecte des données et du contenu des présentes CGU et s’engage à obtenir le consentement dudit conducteur tiers dans la mesure où celui-ci maintiendrait le branchement du boîtier télématique pendant son utilisation du véhicule. Prudence au volant Vous devez en toutes circonstances conduire de manière vigilante et dans le respect des règles du Code de la route. Il est strictement interdit d’utiliser l’Application lorsque le véhicule est en marche. Vous ne devez saisir les données que vous souhaitez entrer manuellement dans l’Application que lorsque votre véhicule est à l’arrêt, à un emplacement de stationnement autorisé. Ces données peuvent être toutefois saisies par CONDITIONS GENERALES APPLICABLES à l’application « ma sécurité routière » un passager qui n’est pas le conducteur, sous réserve que cela n’interfère pas dans la conduite du conducteur. Nous ne serons en aucun cas responsables en cas d’accident. Risques liés à l’utilisation de l’Internet Il est expressément rappelé que l’Internet n’est pas u réseau sécurisé. Nous ne saurions donc être tenus pour responsables de la contamination par d’éventuels virus ou de l’intrusion d’un tiers dans le système de votre terminal, et déclinons toute responsabilité quant aux conséquences résultant de votre accès au Matériel et à son utilisation, et qui ne nous seraient pas imputables. 6. Suspension - Résiliation Sans préjudice de nos droits et recours, nous nous réservons le droit de suspendre ou de résilier de plein droit votre accès à l’application « ma sécurité routière », à tout moment, sans préavis, dans le cas où vous violeriez l'une des dispositions des CGU. Modification Nous pouvons modifier ou adapter les CGU à tout moment. Nous vous informerons de toute modification en plaçant un avis visible sur l'Application. Vous serez réputés avoir accepté les CGU modifiées si vous continuez à accéder et à utiliser l'Application. Généralités Les CGU constituent l'intégralité de l'accord entre vous et nous concernant l'objet des présentes et remplacent les termes de toute autre communication et/ou publicité concernant l’application « ma sécurité routière ». Si des dispositions des CGU sont jugées illégales, invalides ou inapplicables, en tout ou en partie, en raison des lois de tout état ou pays dans lequel ces dispositions sont destinées à être appliquées, elles seront considérées comme supprimées de ces CGU, et les autres dispositions resteront en vigueur. Le non-respect par une partie de tout droit ou stipulation des CGU ne constitue pas une renonciation à ce droit ou à cette stipulation. Droit applicable - Résolution des litiges Les CGU sont régies par le droit français.
                                            {'\n'}{'\n'}{'\n'}{'\n'}
                                        </Text>
                                </View>
                            
                    </ScrollView>
                </ImageBackground>
            </View>
        );
      }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
});