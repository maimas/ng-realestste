import {Injectable} from '@angular/core';
import {gql} from '@apollo/client/core';
import {Apollo, QueryRef} from 'apollo-angular';
import {QueryFindAllPropertiesArgs, QueryFindPropertyByIdArgs} from '../../@generated/app-graphql-models';

@Injectable()
export class AppGraphqlService {
  constructor(private  apollo: Apollo) {
  }

  getPropertyById(args: QueryFindPropertyByIdArgs, propertyFragment: any): QueryRef<QueryFindPropertyByIdArgs> {
    return this.apollo
      .watchQuery({
        query: gql`query findPropertyById($id:String!){
                     findPropertyById(id:$id){
                        ${propertyFragment.NAME}
                      }
                    }
               ${propertyFragment.VALUE}`,
        variables: args
      });
  }

  getAllProperties(args: QueryFindAllPropertiesArgs, propertyFragment: any): QueryRef<QueryFindAllPropertiesArgs> {
    return this.apollo
      .watchQuery({
        query: gql`query findAllProperties($offset:Int!, $limit:Int){
                     findAllProperties(offset:$offset, limit:$limit){
                        ${propertyFragment.NAME}
                      }
                    }
               ${propertyFragment.VALUE}`,
        variables: args
      });
  }

}


