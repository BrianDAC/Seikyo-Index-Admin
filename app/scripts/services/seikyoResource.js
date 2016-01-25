'use-strict';
angular.module('seikyo.admin')
.factory('SeikyoResource', function ($resource, API) {
    return $resource(API.seikyos,{}, {
        getYear: {
            method: 'GET',
            url: API.seikyos,
            params: {
                year: '@year'
            },
            isArray: true
        },
        newSeikyo: {
            method: 'POST',
            url: API.seikyos
        },
        seikyo: {
            method: 'GET',
            url: API.seikyo,
            params: {
                seikyo: '@seikyo'
            }
        },


        addAdvertising: {
            method: 'POST',
            url: API.advertising
        },
        deleteAdvertising: {
            method: 'DELETE',
            url: API.advertising,
            params: {
                seikyo: '@seikyo',
                advertising: '@advertising'
            }
        },
        updateAdvertising: {
            method: 'PUT',
            url: API.advertising,
            params: {
                seikyo: '@seikyo',
                advertising: '@advertising'
            }
        },


        addArticle: {
            method: 'POST',
            url: API.article
        },
        deleteArticle: {
            method: 'DELETE',
            url: API.article,
            params: {
                seikyo: '@seikyo',
                article: '@article'
            }
        },
        updateArticle: {
            method: 'PUT',
            url: API.article,
            params: {
                seikyo: '@seikyo',
                article: '@article'
            }
        },

        addBasicTerm: {
            method: 'POST',
            url: API.basicTerm
        },
        deleteBasicTerm: {
            method: 'DELETE',
            url: API.basicTerm,
            params: {
                seikyo: '@seikyo',
                basicTerm: '@basicTerm'
            }
        },
        updateBasicTerm: {
            method: 'PUT',
            url: API.basicTerm,
            params: {
                seikyo: '@seikyo',
                basicTerm: '@basicTerm'
            }
        },

        addEditorial: {
            method: 'POST',
            url: API.editorial
        },
        deleteEditorial: {
            method: 'DELETE',
            url: API.editorial,
            params: {
                seikyo: '@seikyo',
                editorial: '@editorial'
            }
        },
        updateEditorial: {
            method: 'PUT',
            url: API.editorial,
            params: {
                seikyo: '@seikyo',
                editorial: '@editorial'
            }
        },

        addExperience: {
            method: 'POST',
            url: API.experience
        },
        deleteExperience: {
            method: 'DELETE',
            url: API.experience,
            params: {
                seikyo: '@seikyo',
                experience: '@experience'
            }
        },
        updateExperience: {
            method: 'PUT',
            url: API.experience,
            params: {
                seikyo: '@seikyo',
                experience: '@experience'
            }
        },

        addFemenineDivision: {
            method: 'POST',
            url: API.femenineDivision
        },
        deleteFemenineDivision: {
            method: 'DELETE',
            url: API.femenineDivision,
            params: {
                seikyo: '@seikyo',
                femenineDivision: '@femenineDivision'
            }
        },
        updateFemenineDivision: {
            method: 'PUT',
            url: API.femenineDivision,
            params: {
                seikyo: '@seikyo',
                femenineDivision: '@femenineDivision'
            }
        },

        addFutureGroup: {
            method: 'POST',
            url: API.futureGroup
        },
        deleteFutureGroup: {
            method: 'DELETE',
            url: API.futureGroup,
            params: {
                seikyo: '@seikyo',
                futureGroup: '@futureGroup'
            }
        },
        updateFutureGroup: {
            method: 'PUT',
            url: API.futureGroup,
            params: {
                seikyo: '@seikyo',
                futureGroup: '@futureGroup'
            }
        },

        addMasculineDivision: {
            method: 'POST',
            url: API.masculineDivision
        },
        deleteMasculineDivision: {
            method: 'DELETE',
            url: API.masculineDivision,
            params: {
                seikyo: '@seikyo',
                masculineDivision: '@masculineDivision'
            }
        },
        updateMasculineDivision: {
            method: 'PUT',
            url: API.masculineDivision,
            params: {
                seikyo: '@seikyo',
                masculineDivision: '@masculineDivision'
            }
        },

        addMessage: {
            method: 'POST',
            url: API.message
        },
        deleteMessage: {
            method: 'DELETE',
            url: API.message,
            params: {
                seikyo: '@seikyo',
                message: '@message'
            }
        },
        updateMessage: {
            method: 'PUT',
            url: API.message,
            params: {
                seikyo: '@seikyo',
                message: '@message'
            }
        },

        addMonthlyPhrase: {
            method: 'POST',
            url: API.monthlyPhrase
        },
        deleteMonthlyphrase: {
            method: 'DELETE',
            url: API.monthlyPhrase,
            params: {
                seikyo: '@seikyo',
                monthlyPhrase: '@monthlyPhrase'
            }
        },
        updateMonthlyPhrase: {
            method: 'PUT',
            url: API.monthlyPhrase,
            params: {
                seikyo: '@seikyo',
                monthlyPhrase: '@monthlyPhrase'
            }
        },

        addOrientation: {
            method: 'POST',
            url: API.orientation
        },
        deleteOrientation: {
            method: 'DELETE',
            url: API.orientation,
            params: {
                seikyo: '@seikyo',
                orientation: '@orientation'
            }
        },
        updateOrientation: {
            method: 'PUT',
            url: API.orientation,
            params: {
                seikyo: '@seikyo',
                orientation: '@orientation'
            }
        },

        addReview: {
            method: 'POST',
            url: API.review
        },
        deleteReview: {
            method: 'DELETE',
            url: API.review,
            params: {
                seikyo: '@seikyo',
                review: '@review'
            }
        },
        updateReview: {
            method: 'PUT',
            url: API.review,
            params: {
                seikyo: '@seikyo',
                review: '@review'
            }
        },

        addSokaAdvance: {
            method: 'POST',
            url: API.sokaAdvance
        },
        deleteSokaAdvance: {
            method: 'DELETE',
            url: API.sokaAdvance,
            params: {
                seikyo: '@seikyo',
                sokaAdvance: '@sokaAdvance'
            }
        },
        updateSokaAdvance: {
            method: 'PUT',
            url: API.sokaAdvance,
            params: {
                seikyo: '@seikyo',
                sokaAdvance: '@sokaAdvance'
            }
        },

        addStudentGroup: {
            method: 'POST',
            url: API.studentGroup
        },
        deleteStudentGroup: {
            method: 'DELETE',
            url: API.studentGroup,
            params: {
                seikyo: '@seikyo',
                studentGroup: '@studentGroup'
            }
        },
        updateStudentGroup: {
            method: 'PUT',
            url: API.studentGroup,
            params: {
                seikyo: '@seikyo',
                studentGroup: '@studentGroup'
            }
        },

        getDivision: {
            method: 'GET',
            url: API.division,
            isArray: true
        }

    });
});
